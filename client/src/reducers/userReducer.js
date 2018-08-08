const initialState = {
	user:{},
	going: [],
	notgoing: []
}

export default function (state = initialState, action) {
	switch(action.type) {
		case 'GET_USER':
			return {...state, user: action.payload}
		case 'GET_GOING':
			return {...state, going: action.payload}
		case 'GET_NOTGOING':
			return {...state, notgoing: action.payload}
		default:
			return state
	}
}