import React, { Component } from 'react';
import data from './dummy-data';
import PostContainer from './components/postContainer/PostContainer';
import SearchBar from './components/searchBar/SearchBar';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			instaData: []
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ instaData: data });
		}, 1000);
	}

	addNewComment = (newCommentText, postWithNewComment) => {
		const copiedData = this.state.instaData.map((post) => {
			if (post === postWithNewComment) {
				const newComment = {
					id: Date.now().toString(),
					username: 'reactjs',
					text: newCommentText
				};
				const newComments = [ ...post.comments, newComment ];
				return {
					...post,
					comments: newComments
				};
			}
			return post;
		});

		this.setState({
			instaData: copiedData
		});
	};

	postLiked = (postToLike) => {
		const copiData = this.state.instaData.map((post) => {
			if (postToLike === post) {
				let userLikedPost = post.userLiked;
				userLikedPost = !userLikedPost;
				const newLikes = userLikedPost ? post.likes + 1 : post.likes - 1;

				return {
					...post,
					userLiked: userLikedPost,
					likes: newLikes
				};
			}
			return post;
		});

		this.setState({
			instaData: copiData
		});
	};

	searchUpdated = (serchText) => {
		if (serchText === '') {
			this.setState({ instaData: data });
		} else {
			const copiData = this.state.instaData.filter((post) => post.username === serchText);

			this.setState({
				instaData: copiData
			});
		}
	};

	render() {
		return (
			<div className="app">
				<SearchBar searchUpdated={this.searchUpdated} />
				{this.state.instaData.map((post) => (
					<PostContainer
						key={post.id}
						post={post}
						newPostCommentSubmitted={this.addNewComment}
						postLiked={this.postLiked}
					/>
				))}
			</div>
		);
	}
}
export default App;
