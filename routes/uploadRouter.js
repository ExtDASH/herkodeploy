const express = require('express')
const fs = require('fs-extra')
const multer = require('multer')
const bodyParser = require('body-parser')
const router = express.Router()
const mainController = require('../controllers/main')


const upload = multer()

// Unused for now?

router.post('/', upload.single('Ncsv'), mainController.uploadFiles)


module.exports = router