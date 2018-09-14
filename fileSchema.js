const mongoose = require('mongoose')

const filename = mongoose.Schema ({
	name: String,
})

module.exports = mongoose.model('fileNameSchema', filename)