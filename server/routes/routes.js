var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')



// Data controller

let users = {
	'id_1' : {
		name: 'Foo',
		age: 28,
	},
	'id_2' : {
		name: 'Bar',
		age: 24,
	},
}


var DataController = {
	getUserInfo(req, res, next){
		let id = req.params.id
		if(users[id]){
			res.send(JSON.stringify( users[id] ))
		} else {
			res.status(404).send(`no user with that id : ${id}`)
		}
	},

	getRandomImage(req, res, next){
		let api_key = 'nJvuv44V7EkgdiALWnNjU0CQo7IB9WYN'
		let url = `http://api.giphy.com/v1/gifs/random?api_key=${api_key}`
		fetch(url)
			.then(response => {
				if(!response.ok) throw response
				return response.json()
			})
			.then(json => { 
				l(json)
				res.send({
					title: json.data.title,
					url: json.data.images.original.url
				})
			})
			.catch(error => res.send(error))
	}
}
//////////////////////////




// Server buzy imitation
let pause = (f, time) => {
	return function(...props){
		setTimeout(() => {
			f(...props)
		}, time)
	}
}
//////////////////////////


router.get('/user/data/:id', pause(DataController.getUserInfo, 1000))
router.get('/img-load', pause(DataController.getRandomImage, 2000))

module.exports = router