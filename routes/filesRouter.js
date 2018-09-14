const express = require('express')
const fs = require('fs-extra')
const multer = require('multer')
const bodyParser = require('body-parser')
const router = express.Router()
const filesCont = require('../controllers/filesController.js')

router.get('/', filesCont.viewFiles)
router.post('/', filesCont.fileNamesUnused)

module.exports = router