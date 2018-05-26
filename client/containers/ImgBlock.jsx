import React, { Component } from 'react'
import { connect } from 'react-redux'
import { imgReload } from '../redux/actions.js'

let l = console.log


class ImgBlock extends Component {

	componentDidMount(){
		let { loading, imgReload} = this.props
		if(!loading) imgReload()
	}

	render() {
		let { img, loading, error, imgReload, title } = this.props

		return (
			<div> 
				<hr />
				<button onClick={() => { !loading && imgReload() }}>{ loading ? <i>loading...</i> : 'imageReload'}</button>
				{ img && <img src={img}/> }
				{ error && <h5>{error}</h5>}
				{ title && <h5>{title}</h5>}
			</div>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		...state.img
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		imgReload: () => dispatch( imgReload() )
	}
}

let connectedImgBlock = connect(mapStateToProps, mapDispatchToProps)(ImgBlock)
export default connectedImgBlock