//constant express is set to require express
const express = require('express');
//constant router is set to require express.Router()
const router = express.Router();

//router.get is for handling GET requests
router.get('/', (req, res) => {
    res.json({
        "status": 'You are riding the donut API!'
    });
});

//router.post is for handling POST requests
router.post('/', (req, res) => {
    res.json({
        "status": 'You are riding the donut API!'
    });
});