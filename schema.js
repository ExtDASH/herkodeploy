const mongoose = require('mongoose')

const nums = mongoose.Schema ({
	field1: String,
})

module.exports = mongoose.model('numSchema', nums)