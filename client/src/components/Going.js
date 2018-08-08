import React, { Component } from 'react'
import { getGoing } from '../actions/userData'
import {connect} from 'react-redux'

class Going extends Component {
	componentDidMount() {
		getGoing()
	}

 	render() {
   	return (
 			<div className="going">
 				{this.props.going.map((data, i) => (
 					<div className="userContainer">
			 			<div className="profilePicDiv">
		 					<img className="profilePic" src={data.image}/>
		 				</div>
		 				<div className="userInfoContainer">
							<div id="capitalize" className="userInfo"><span className="bold">Name:</span> {data.name}</div>
							<div className="userInfo"><span className="bold">Phone:</span> {data.phone}</div>
							<div className="userInfo"><span className="bold">Email:</span> {data.email}</div>
						</div>
					</div>
 				))}
 			</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		going: appState.going
	}
}

export default connect(mapStateToProps)(Going)