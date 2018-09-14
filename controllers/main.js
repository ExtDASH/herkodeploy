const csv = require('csvtojson')
const bodyParser = require('body-parser')
const numSchem = require('../schema.js')
const yodelSchema = require('../yodelSchema.js')
const fs = require('fs-extra')
const multer = require('multer')


module.exports = {
	getNums: (req, res, next) => {
		numSchem.find()
			.then(obj => {
				return res.status(200).json(obj)
			})
			.catch(e => {
				req.error = e
				console.log(e)
				next()
			})
	},

	getYodelNums: (req, res, next) => {
		yodelSchema.find()
			.then(obj => {
				return res.status(200).json(obj)
			})
			.catch(e => {
				req.error = e
				console.log(e)
				next()
			})
	},

	searchCSV: (req, res, next) => {
		console.log(req.query)
		const filePath = `${__dirname}/../uploads/${req.query.filename}`
		csv({
			noheader: true
		})
		.fromFile(filePath)
		.then((obj) => {
			return res.status(200).json(obj)
		})
		.catch(e => {
			req.error = e
			next()
		})
	},

	csvPut: (req, res, next) => {
		const filePath = `${__dirname}/../uploads/${req.query.filename}`
		csv({
			noheader: true
		})
		.fromFile(filePath)
		.then((obj) => {
			console.log(obj)
			return res.status(200).json(obj)
		})
		.catch(e => {
			req.error = e
			next()
		})
	},



	putEm: (req, res, next) => {
		// console.log("hi" + req.body)
		yodelSchema.insertMany(req.body, function(err, results){
			if (err) {
				console.log(err)
			} else {
				console.log(results)
				next()
			}

		})

	},


	uploadFiles: (req, res, next) => {
		console.log(req.file)
		// res.status(200).send()
			// return
	},

	// postYodelNums: (req, res, next) => {
	// 	// console.log(req.body)

	// 	for (var i = 0; i < req.body.length; i++){
	// 		let newObj = {}
	// 		newObj = req.body[i].field1
	// 		// setTimeout(function() {
	// 			yodelSchema.create({
	// 				field1: newObj
	// 			})
	// 			.then(data => res.status(200).json({ data }))
	// 			.catch(e => {
	// 				req.error = e
	// 				next()
	// 			})
	// 		// }, 200)
	// 	}
		
	// },

	// postNums: (req, res, next) => {
	// 	console.log(req.body.field1)
	// 	numSchem.create({
	// 		field1: req.body.field1
	// 	})
	// 	.then(data => res.status(200).json({ data }))
	// 	.catch(e => {
	// 		req.error = e
	// 		console.log(e)
	// 		next()
	// 	})
	// },
}