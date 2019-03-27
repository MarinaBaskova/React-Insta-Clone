import React, { Component } from 'react';
import data from './dummy-data';
import PostContainer from './components/postContainer/PostContainer';
import SearchBar from './components/searchBar/SearchBar';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			instaData: data
		};
	}
	render() {
		return (
			<div className="app">
				<SearchBar />
				{this.state.instaData.map((post) => <PostContainer key={post.id} post={post} id={post.id} />)}
			</div>
		);
	}
}
export default App;
