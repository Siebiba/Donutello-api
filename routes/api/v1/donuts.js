//constant express is set to require express
const express = require('express');
//constant router is set to require express.Router()
const router = express.Router();
const donutsController = require('../../../controllers/api/v1/donuts');

//router.get is for handling GET requests
router.get('/', donutsController.getAll);


//router.post is for handling POST requests
router.post('/', donutsController.create);

module.exports = router;