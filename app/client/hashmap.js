const mongoose = require('mongoose')

const hashmap = mongoose.Schema ({
	check: Array,
})

module.exports = mongoose.model('hashSchema', hashmap)