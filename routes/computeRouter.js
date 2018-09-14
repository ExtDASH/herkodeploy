const compute = require('../controllers/computeController.js')
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.get('/dupes', compute.dupesGet)
router.post('/dupes', compute.dupesPost)

router.get('/hasher', compute.hasherGet)
router.post('/hasher', compute.hasherPost)

module.exports = router