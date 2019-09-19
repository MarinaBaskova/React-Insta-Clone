import React, { Component } from 'react';
import data from './dummy-data';
import SearchBar from './components/searchBar/SearchBar';
import PostsPage from './components/postContainer/PostsPage';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			instaData: [],
			searching: '',
			loggedIn: false,
			username: null
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
					username: localStorage.getItem('username'),
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

	// searchUpdated = (serchText) => {
	// 	const copiData = [...this.state.instaData]
	// 	if (serchText === '') {
	// 		this.setState({ instaData: data });
	// 	} else {
	// 		const copiData = this.state.instaData.filter((post) => post.username === serchText);

	// 		this.setState({
	// 			instaData: copiData
	// 		});
	// 	}
	// };

	filteredData = () => {
		if (this.state.searching === '') {
			return this.state.instaData;
		} else {
			return this.state.instaData.filter((post) => post.username.includes(this.state.searching));
		}
	};

	searchHandler = (e) => {
		this.setState({ searching: e.target.value });
	};

	render() {
		return (
			<div className="app">
				<SearchBar
					searchUpdated={this.searchUpdated}
					searchHandler={this.searchHandler}
					secrching={this.state.searching}
				/>
				<PostsPage
					data={this.filteredData()}
					newPostCommentSubmitted={this.addNewComment}
					postLiked={this.postLiked}
				/>
			</div>
		);
	}
}
export default App;
