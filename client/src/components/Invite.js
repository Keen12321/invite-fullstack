import React, { Component } from 'react'
import {getUser} from '../actions/userData'
import {connect} from 'react-redux'

class Invite extends Component {
	componentDidMount() {
		getUser()
	}

 	render() {
   	return (
 			<div>
				{this.props.user.map(data => (
					<div>{data.gender}</div>
				))} 				
 			</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		user: appState.results
	}
}

export default connect(mapStateToProps)(Invite)