const express = require('express')
const connect = require('connect')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fs = require('fs-extra')
const multer = require('multer')
const getRouter = require('./routes/ourNums')
const nFs = require('./fileSchema.js')
const namesRouter = require('./routes/namesRouter.js')
const computeRouter = require('./routes/computeRouter.js')

// const uploadRouter = require('./routes/uploadRouter') unused for now
const filesRouter = require('./routes/filesRouter')
const path = require('path')



const app = express()

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	    cb(null, './uploads')
	},
	filename: function (req, file, cb) {
	  	var newName = file.originalname.split(/\W+/g)
	  	var fullName = `${newName[0]}${Date.now()}.csv`
	    cb(null, fullName)
	},
})



var upload = multer({ storage: storage })

app.use(express.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(morgan('tiny')) //watching for changes
// app.use(express.static(`${__dirname}/client/index.html`))

app.post('/uploads', upload.single('Ncsv'), function (req, res, next) {
	var fileName = req.file.filename
	nFs.create({
		name: fileName
	})
	.then(data => res.status(200).send())
	.catch(e => {
		req.error = e
		console.log(e)
		next()
	})
})

//I need a better way of doing this since multiple ppl will be using this. this is fine for now though i think.

const postName = (name) => {
	app.post('/filenames', function (req, res, next){
		console.log(name)
		nFs.create({
			name: `${name}`
		})
		.then(data => {
			res.status(200).send()
		})
		.catch(e => {
			req.error = e
			console.log(e)
			next()
		})
	})
}

app.use('/uploads', filesRouter)

app.use('/getnums', getRouter)

app.use('/compute', computeRouter)

app.use('/filenames', postName)

app.use('/fileGet', namesRouter)

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/', 'index.html'));
});

mongoose.connect('mongodb://allclients:allclients1@ds021172.mlab.com:21172/yodeldidschecker', { useNewUrlParser: true })
	.then(() => {
		const PORT = process.env.PORT || 3000;
		app.listen(PORT, () => {
		    console.log(`Our app is running on port ${ PORT }`);
		});
	})
