const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

// Clean this up

router.get('/base', mainController.getNums)
// router.post('/base', mainController.postNums)

router.get('/yodel', mainController.getYodelNums)
// router.post('/yodel', mainController.postYodelNums)

router.get('/searchcsv', mainController.searchCSV)

router.get('/csvput', mainController.csvPut)

router.post('/putem', mainController.putEm)



module.exports = router