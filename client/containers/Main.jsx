import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../redux/actions.js'

let { userGetData, userGetDataSuccess, userGetDataFail, userChangeId } = actions

let fetchUserData = (dispatch, id) => {
	dispatch( userGetData() )
	return fetch(`user/data/${id}`, {method : 'GET'})
		.then( res => { 
			if(!res.ok) throw res
			return res.json() 
		})
		.then(
			data => dispatch( userGetDataSuccess(data) ),
		)
		.catch(
			err => { 
				return err.text().then( errText => dispatch( userGetDataFail(errText) ))
			}
		)
}

let changeId = (dispatch, id) => {
	dispatch( userChangeId(id) )
}

class Main extends Component {
	render() {
		l(this.props)

		let { name, age, loading, id, getUserData, changeId, error } = this.props

		if(error) l(error)

		return (
			<div>
				{ ( id != 'id_1') && <button onClick={() => {changeId('id_1')}}> change to id_1 </button> }
				{ ( id != 'id_2') && <button onClick={() => {changeId('id_2')}}> change to id_2 </button> }
				{ ( id != 'id_3') && <button onClick={() => {changeId('id_3')}}> change to id_3 </button> }

				<hr />

				{ (!name && !age) && <button onClick={() => {getUserData(id)}}>Get User Data</button> }
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
		getUserData: (id) => { fetchUserData(dispatch, id) },
		changeId: (id) => { changeId(dispatch, id) } 
	}
}

Main = connect(mapStateToProps, mapDispatchToProps)(Main)

export default Main