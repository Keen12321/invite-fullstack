import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import Invite from './Invite'
import Going from './Going'
import NotGoing from './NotGoing'

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
	      <Router>
	      	<div>
	      		<Route exact path="/" component={Invite}/>
	      		<Route path="/going" component={Going} />
	      		<Route path="/notgoing" component={NotGoing} />
	      	</div>
	      </Router>
	    </Provider>
    )
  }
}

export default App
