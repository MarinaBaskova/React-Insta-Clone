import React, { Component } from 'react';

const withAuthenticate = (App) => (LoginPage) => {
	return class extends Component {
		constructor() {
			super();
			this.state = {
				loggedIn: false,
				username: null
			};
		}

		componentDidMount() {
			if (localStorage.getItem('username')) {
				this.setState({ loggedIn: true });
				this.setState({ username: localStorage.getItem('username') });
			}
		}

		handleChanges = (e) => {
			this.setState({ username: e.target.value });
		};

		handleLogin = (e) => {
			localStorage.setItem('username', this.state.username);
			this.setState({ loggedIn: true });
			this.setState({ username: localStorage.getItem('username') });
		};

		render() {
			if (this.state.loggedIn) {
				return <App {...this.props} username={this.state.username} />;
			} else {
				return (
					<LoginPage
						handleChanges={this.handleChanges}
						username={this.username}
						handleLogin={this.handleLogin}
					/>
				);
			}
		}
	};
};

//localStorage.clear and rerender the page and clear the state
export default withAuthenticate;
