import React, { Component } from 'react';
import './SearchBar.css';
import camera from '../../instaImg/camera.svg';
import logo from '../../instaImg/instagram.jpg';
import compass from '../../instaImg/searchBarCompass.png';
import heart from '../../instaImg/searchBarHeart.png';
import user from '../../instaImg/user.png';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		};
	}

	// handleChanges = (e) => {
	// 	this.setState({ searchText: e.target.value });
	// };

	searchSubmitted = (e) => {
		e.preventDefault();
		this.props.searchUpdated(this.state.searchText);
	};

	onClick = () => {
		localStorage.clear('username');
		// localStorage.removeItem('username');
		window.location.reload();
	};

	render() {
		return (
			<div className="searchBar">
				<div className="searchBarLeft">
					<img className="camera" alt="camera" src={camera} />
					<img className="instagramLogo" alt="instagram logo" src={logo} />
				</div>
				<div className="searchBarform">
					<form onSubmit={this.searchSubmitted}>
						<input
							className="inputSearch"
							type="text"
							placeholder="Search"
							onChange={this.props.searchHandler}
							value={this.props.searching}
						/>
					</form>
				</div>
				<div className="searchBarRight">
					<img className="compass" alt="compass" src={compass} />
					<img className="heartSearch" alt="heart" src={heart} />
					<img className="profileSearch" alt="profile" src={user} />
				</div>
				<button onClick={this.onClick} className="logoutBtn">
					Logout
				</button>
			</div>
		);
	}
}

export default SearchBar;
