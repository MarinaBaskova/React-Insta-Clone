import React, { Component } from 'react';

const Login = (props) => {
	return (
		<div className="loginWrapper">
			<div className="loginContainer">
				<div className="imageLogin" />
				<form onSubmit={(e) => props.handleLogin(e)}>
					<input type="text" placeholder="Username" value={props.username} onChange={props.handleChanges} />
					<button type="submit" value="Login">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
