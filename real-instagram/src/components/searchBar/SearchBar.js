import React, { Component } from 'react';
import './SearchBar.css';
import camera from '../../instaImg/camera.svg';
import logo from '../../instaImg/instagram.jpg';
import compass from '../../instaImg/searchBarCompass.png';
import heart from '../../instaImg/searchBarHeart.png';
import user from '../../instaImg/user.png';

const SearchBar = (props) => {
	return (
		<div className="searchBar">
			<div className="searchBarLeft">
				<img className="camera" alt="camera" src={camera} />
				<img className="instagramLogo" alt="instagram logo" src={logo} />
			</div>
			<div className="searchBarform">
				<form>
					<input className="inputSearch" type="text" placeholder="Search" />
				</form>
			</div>
			<div className="searchBarRight">
				<img className="compass" alt="compass" src={compass} />
				<img className="heartSearch" alt="heart" src={heart} />
				<img className="profileSearch" alt="profile" src={user} />
			</div>
		</div>
	);
};

export default SearchBar;
