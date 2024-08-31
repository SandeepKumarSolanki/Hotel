const express = require('express')
const router = express.Router()

const MenuItem = require('../models/MenuItem');


//POST Method to add a MenuItem
router.post('/', async(req,res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})

//GET method to get the Menu Item
router.get('/', async(req,res) => {
    try {
        
        const data = await MenuItem.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})

module.exports = router;