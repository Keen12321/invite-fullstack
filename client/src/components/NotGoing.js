import React, { Component } from 'react'
import { getNotGoing } from '../actions/userData'
import {connect} from 'react-redux'

class NotGoing extends Component {

	componentDidMount() {
		getNotGoing()
	}

 	render() {
   	return (
 			<div className="going">
 				{this.props.notgoing.map((data, i) => (
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
		notgoing: appState.notgoing
	}
}

export default connect(mapStateToProps)(NotGoing)