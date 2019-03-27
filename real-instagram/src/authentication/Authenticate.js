import React, { Component } from 'react';

const withAuthenticate = (App) =>
	class extends Component {
		render() {
			return <App {...this.props} />;
		}
	};

export default withAuthenticate;
