import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userGetData, userChangeId } from '../redux/actions.js'


class Main extends Component {
	state = {
		id: undefined
	}

	componentDidMount(){
		let { id, userGetData } = this.props
		this.state.id = id // dont need setState
		userGetData(id)
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.id != this.state.id){

			this.state.id = nextProps.id // dont need setState
			this.props.userGetData(nextProps.id)
		}
	}

	render() {
		//l(this.props)

		let { name, age, loading, id, changeId, error } = this.props

		if(error) l(error)

		return (
			<div>
				{ ( id != 'id_1') && <button onClick={() => {!loading && changeId('id_1')}}> change to id_1 </button> }
				{ ( id != 'id_2') && <button onClick={() => {!loading && changeId('id_2')}}> change to id_2 </button> }
				{ ( id != 'id_3') && <button onClick={() => {!loading && changeId('id_3')}}> change to id_3 </button> }

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
		userGetData: (id) => { dispatch(userGetData(id)) },
		changeId: (id) => { dispatch(userChangeId(id)) } 
	}
}

Main = connect(mapStateToProps, mapDispatchToProps)(Main)

export default Main