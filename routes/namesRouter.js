const express = require('express')
const fs = require('fs-extra')
const multer = require('multer')
const bodyParser = require('body-parser')
const router = express.Router()
const namesCont = require('../controllers/names.js')

// router.get('/', namesCont.viewFiles)
router.get('/', namesCont.fileNames)

module.exports = router