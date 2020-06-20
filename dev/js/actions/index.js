export const selectUser = (user) => {
	console.log('You clicked user: ', user.first)
	return {
		type: 'USER_SELECTED',
		payload: user
	}
}