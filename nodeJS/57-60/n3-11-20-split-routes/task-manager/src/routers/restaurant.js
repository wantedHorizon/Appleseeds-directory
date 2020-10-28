const express = require('express');
const Restaurant = require('../models/restaurant');
const router = new express.Router();



router.get('/restaurant/:id', async (req, res) => {
    const { id } = req.params;
    try {

        const result = await Restaurant.findById(id);

        if (!result) {
            return res.status(404).send('Error ID not found');
        }
        return res.status(200).json(result);
    } catch (e) {
        res.status(500).send(e);

    }



});

// async/await
router.get('/restaurant/countByCuisine/:cuisine', async (req, res) => {
    const {cuisine} = req.params;

    try {
        const result = await Restaurant.find({cuisine:cuisine}).countDocuments();
        return res.status(200).send({amount:result});

    }catch(e){
       return  res.status(500).send(e);
    }

});
//with promise
router.get('/restaurant/countByCuisinePromise/:cuisine',  (req, res) => {
    const {cuisine} = req.params;

        const result =  Restaurant.find({cuisine:cuisine}).countDocuments();

        result.then(result=> {
            return  res.status(200).send({amount:result});

        }).catch(e=>{

            return res.status(500).send(e);
        })

});

//create new user with newSurvey => newUser
router.post('/restaurant', async (req, res) => {
    const restaurant = new Restaurant(req.body);

    try {
        const newRestaurant = await restaurant.save();
        return res.status(201).json(newRestaurant);


    } catch (e) {
        res.status(400).send(e);
    }






});

router.patch('/restaurant/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['cuisine', 'borough', 'name']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!restaurant) {
            return res.status(404).send()
        }

        res.send(restaurant)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.delete('/restaurant/:id', async (req, res) => {
    const { id } = req.params;
    try {

        const result = await Restaurant.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send('Error ID not found');
        }
        return res.status(200).json(result);
    } catch (e) {
        res.status(500).send(e);

    }



});



module.exports = router;