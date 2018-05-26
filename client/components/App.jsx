global.l = console.log
import React, { Component } from 'react'
import Main from '../containers/Main.jsx'
import ImgBlock from '../containers/ImgBlock.jsx'

class App extends Component{
	render(){
		return(
			<div>
				App
				<Main />
				<ImgBlock/>
			</div>
		)
	}
}

export default App