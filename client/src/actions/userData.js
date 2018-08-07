import axios from 'axios'
import store from '../store'

export function getUser() {
	axios.get('https://randomuser.me/api/').then(resp => {
		store.dispatch({
			type: 'GET_USER',
			payload: resp.data
		})
	})
}