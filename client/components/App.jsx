global.l = console.log
import React, { Component } from 'react'
import User from '../containers/User.jsx'
//import ImgBlock from '../containers/ImgBlock.jsx'

class App extends Component{
	render(){
		return(
			<div>
				App
				<User />
				{/*<ImgBlock/>*/}
			</div>
		)
	}
}

export default App