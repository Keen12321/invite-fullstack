import axios from 'axios'
import store from '../store'

export function getUser() {
	axios.get('/api/users/').then(resp => {
		store.dispatch({
			type: 'GET_USER',
			payload: resp.data
		})
	})
}

export function changeStatusGoing(id, status) {
	axios.patch('/api/users/' + id, {
		status:status
	}).then(resp => {
		getUser()
	})
}

export function changeStatusNotGoing(id, status) {
	axios.patch('/api/users/' + id, {
		status:status
	}).then(resp => {
		getUser()
	})
}

export function getGoing() {
	axios.get('/api/going/').then(resp => {
		store.dispatch({
			type: 'GET_GOING',
			payload: resp.data
		})
	})
}

export function getNotGoing() {
	axios.get('/api/notgoing/').then(resp => {
		store.dispatch({
			type: 'GET_NOTGOING',
			payload: resp.data
		})
	})
}