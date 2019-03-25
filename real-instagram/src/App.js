import React, { Component } from 'react';
import data from './dummy-data';
import PostContainer from './components/postContainer/PostContainer';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			instaData: data
		};
	}
	render() {
		return <div>{this.state.instaData.map((post) => <PostContainer key={post.id} post={post} />)}</div>;
	}
}
export default App;
