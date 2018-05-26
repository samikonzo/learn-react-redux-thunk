var express = require('express')
var router = express.Router()








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
	}
}
//////////////////////////


// Server buzy imitation
let pause = ( f ) => {
	return function(...props){
		setTimeout(() => {
			f(...props)
		}, 1000)
	}
}
//////////////////////////


router.get('/user/data/:id', pause(DataController.getUserInfo))

module.exports = router