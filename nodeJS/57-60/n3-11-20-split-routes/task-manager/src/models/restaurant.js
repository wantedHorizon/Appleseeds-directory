const mongoose = require('mongoose')

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

module.exports = Restaurant;