import React, { Component } from 'react'
import {getUser, changeStatusGoing, changeStatusNotGoing, getGoing, getNotGoing} from '../actions/userData'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class Invite extends Component {
	state = {
		status: []
	}

	componentDidMount() {
		getUser()
		getGoing()
		getNotGoing()
	}

	going = (e) => {
		changeStatusGoing(e.target.value, 'going')
	}

	notGoing = (e) => {
		changeStatusNotGoing(e.target.value, 'notgoing')
	}

 	render() {
   	return (
 			<div className="mainUserContainer">
 				<div className="count">
	 				<Link to="/going">Going: {this.props.going.length}</Link>
	 				<Link to="/notgoing">Not Going: {this.props.notgoing.length}</Link>
	 			</div>
	 			<div className="userContainer">
		 			<div className="profilePicDiv">
	 					<img className="profilePic" src={this.props.user.image}/>
	 				</div>
	 				<div className="userInfoContainer">
						<div id="capitalize" className="userInfo"><span className="bold">Name:</span> {this.props.user.name}</div>
						<div className="userInfo"><span className="bold">Phone:</span> {this.props.user.phone}</div>
						<div className="userInfo"><span className="bold">Email:</span> {this.props.user.email}</div>
					</div>
					<div className="buttonsContainer">
						<button value={this.props.user.id} onClick={this.notGoing} id="x" className="buttons"><i className="fa fa-times"></i></button>
						<button value={this.props.user.id} onClick={this.going} id="checkmark" className="buttons"><i className="fa fa-check"></i></button>
					</div>
				</div>
 			</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		user: appState.user,
		going: appState.going,
		notgoing: appState.notgoing
	}
}

export default connect(mapStateToProps)(Invite)