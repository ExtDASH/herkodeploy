const mongoose = require('mongoose')

const yodelNums = mongoose.Schema ({
	field1: String,
})

module.exports = mongoose.model('yodelSchema', yodelNums)