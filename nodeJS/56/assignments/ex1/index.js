const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const restaurants = require('./restaurants');


const port = process.env.PORT || 3030;
app.use(cors()); 

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.get('/restaurant/:id', async(req, res) => {
    const {id} = req.params;
    console.log(id);
    const result = await restaurants.getRestaurantById(id);

        if(!result) {
            return res.send('Error ID not found');
        }

        return res.status(200).json(result);


})

//create new user with newSurvey => newUser
app.post('/restaurant', async(req, res) => {
       const {data} =req.body;
   
        const newRestaurant = await restaurants.addRestaurant(data);
        console.log(newRestaurant);
        if(!newRestaurant){
            return  res.status(200).send("invalid request");
        }
        return res.status(201).json(newRestaurant);
    


})


app.get('*', (req, res) => {
    res.status(404).send("Page not found");
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})


