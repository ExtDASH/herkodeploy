const bodyParser = require('body-parser')
const hasher = require('../hashmap.js')
const yodel = require('../yodelSchema.js')

module.exports = {
	dupesGet: (req, res, next) => {
		
	},

	dupesPost: (req, res, next) => {
		
	},

	hasherGet: (req, res, next) => {
		console.log("enter hasherGet")
		let mainNums = []
		let check = []
		let dupes = []
		let hashmap = {}
		hasher.find()
			.then(arr => {
				console.log(arr)
				for(var j = 0; j < arr[0].check.length; j++){
					mainNums.push(Number(arr[0].check[j]))
				}
				console.log("Done for each hash")
				console.log(mainNums)
				yodel.find()
					.then(arr2 => {
						console.log("enter then of yodel find")
						for (var i = 0; i < arr2.length; i++){
							check.push(Number(arr2[i].field1))
						}
						console.log(check)
						console.log("check")
						console.log("enter checker")
						check.forEach(function(compNum){
							if(mainNums.includes(compNum)){
								console.log("hi")
								dupes.push(compNum)
							}
						})
						console.log(dupes)
						console.log("these are dupes")
						hasher.deleteOne({}, function(err){
							if (err) return handleError(err)
						})
						return res.status(200).json(dupes)
					})
			})
	},

	hasherPost: (req, res, next) => {
		let check = []
		for (var i = 0; i < req.body.check.length; i++){
			check.push(req.body.check[i])
		}
		hasher.create({
			check: check,
		})
		.then(data => res.status(200).json({ data }))
		.catch(e => {
			req.error = e
			next()
		})
	},
}