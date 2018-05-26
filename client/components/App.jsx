global.l = console.log
import React, { Component } from 'react'
import Main from '../containers/Main.jsx'


class App extends Component{
	render(){
		return(
			<div>
				App
				<Main />
			</div>
		)
	}
}

export default App