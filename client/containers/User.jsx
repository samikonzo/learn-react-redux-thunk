import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userGetDataRun, userChangeId } from '../redux/actions.js'


class Main extends Component {
	state = {
		id: undefined
	}

	componentDidMount(){
		let { id, userGetDataRun } = this.props
		this.state.id = id // dont need setState
		userGetDataRun(id)
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.id != this.state.id){

			this.state.id = nextProps.id // dont need setState
			this.props.userGetDataRun(nextProps.id)
		}
	}

	render() {
		//l(this.props)

		let { name, age, loading, id, userChangeId, error } = this.props

		if(error) l(error)

		return (
			<div>
				{/* ( id != 'id_1') && <button onClick={() => {!loading && userChangeId('id_1')}}> change to id_1 </button> */}
				{/* ( id != 'id_2') && <button onClick={() => {!loading && userChangeId('id_2')}}> change to id_2 </button> */}
				{/* ( id != 'id_3') && <button onClick={() => {!loading && userChangeId('id_3')}}> change to id_3 </button> */}

				<hr />

				{ name && <h3>{name}</h3> }
				{ age && <h4>{age}</h4> }
				{ loading && <i> loading... </i>}
				{ error && <h5> {error} </h5>}

			</div>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		...state.user
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		userGetDataRun: (id) => { dispatch(userGetDataRun(id)) },
		userChangeId: (id) => { dispatch(userChangeId(id)) } 
	}
}

Main = connect(mapStateToProps, mapDispatchToProps)(Main)

export default Main