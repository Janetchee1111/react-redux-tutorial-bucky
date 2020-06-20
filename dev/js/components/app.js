import React from 'react'
require(../../scss/style.scss)

const App = () => (
	<div>
		<h2>Username List: </h2>
		<hr/>
		<UserList />
		<h2>User Details: </h2>
		<UserDetail />
	</div>
)

export default App