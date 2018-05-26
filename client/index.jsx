import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App.jsx'

import store from './redux/store.js'
import './styles.less'


render( 
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>

	,document.getElementById('app')
)