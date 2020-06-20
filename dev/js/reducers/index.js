import {combineReducers} from 'redux'
import UserReducer from './reducer-users'
import ActiveUserReducer form './reducer-active-user'

const allReducers = combineReducers({
	users: UserReducer
	activeUser: ActiveUserReducer
})

export default allReducers 