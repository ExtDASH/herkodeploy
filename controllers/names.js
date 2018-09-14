const csv = require('csvtojson')
const bodyParser = require('body-parser')
const numSchem = require('../schema.js')
const name = require('../fileSchema.js')
const fs = require('fs-extra')
const fNS = require('../fileSchema.js')
const multer = require('multer')


module.exports = {
	fileNames: (req, res, next) => {
		fNS.find()
			.then(obj => {
				return res.status(200).json(obj)
			})
			.catch(e => {
				req.error = e
				console.log(e)
				next()
			})
	}
}