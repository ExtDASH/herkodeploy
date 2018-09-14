const csv = require('csvtojson')
const bodyParser = require('body-parser')
const numSchem = require('../schema.js')
const yodelSchema = require('../yodelSchema.js')
const FNS = require('../fileSchema.js')
const fs = require('fs-extra')
const walk = require('klaw')
const multer = require('multer')
const mongoose = require('mongoose')

module.exports = {
	viewFiles: (req, res, next) => {
		FNS.find()
			.then(obj => {
				return res.status(200).json(obj)
			})
			.catch(e => {
				req.error = e
				console.log(e)
				next()
			})
	},

	fileNamesUnused: (req, res, next) =>{

	},

}