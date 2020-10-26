const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/restaurants-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const limit = (val) => {
    if (val[0] < -90 || val[0] > 90)
        throw new Error("lat must be between -90 and 90")

    if (val[1] < -180 || val[1] > 180)
        throw new Error("lat must be between -180 and 180")
    return val.length == 2;
}
const Restaurant = mongoose.model('Restaurant', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    borough: {
        type: String,
        trim: true
    },
    cuisine: {
        type: String,
        trim: true
    },
    restaurant_id: {
        type: Number,
        required: true,
        validate(val) {
            if (val < 1) {
                return new Error('restaurant_id must be bigger than 0!');
            }
        }
    },
    address: {
        building: String,
        street: String,
        zipcode: Number,
        coord: {
            type: [Number],
            validate: [limit, 'Must be lat,lon']

        }

    }



})


const getRestaurantById = async (resID) => {
    try {
        const result = Restaurant.findOne({
            restaurant_id: resID
        });
        if(!result){
            return null;
        }
        return (await result).toJSON();

    } catch (e) {
        console.log(e);
        return null;
    }

}

const addRestaurant = async (data) => {
    const rest = new Restaurant(
        data
    );
   return  rest.save().then(() => { return rest })
    .catch(e=>{
        return null
    });

}


module.exports = {
    getRestaurantById,
    addRestaurant
}