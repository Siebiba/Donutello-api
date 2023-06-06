//constant express is set to require express
const express = require('express');
//constant router is set to require express.Router()
const router = express.Router();
const donutsController = require('../../../controllers/api/v1/donuts');

//router.get is for handling GET requests
router.get('/', donutsController.getAll);
//router.post is for handling POST requests
router.post('/', donutsController.create);

//router.put is for handling PUT requests
router.put('/:id', donutsController.update);

//router.delete is for handling DELETE requests
router.delete('/:id', donutsController.remove);

//router.get is for handling GET requests
router.get('/:id', donutsController.getById);

module.exports = router;

