const express = require('express')
const router = express.Router();
const shopeeController = require('../controllers/shopeeControllers/controllers')

router.post('/shopee',shopeeController.controllers.scrap)

module.exports = router;