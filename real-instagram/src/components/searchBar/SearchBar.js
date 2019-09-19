import React, { Component } from 'react';

import camera from '../../instaImg/camera.svg';
import logo from '../../instaImg/instagram.jpg';
import compass from '../../instaImg/searchBarCompass.png';
import heart from '../../instaImg/searchBarHeart.png';
import user from '../../instaImg/user.png';
import styled, { css } from 'styled-components';

const SearchBarHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
`;

const SearchBarLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 33%;
	flex-direction: row;
	margin-left: 10px;
`;

const Camera = styled.img`
	width: 22%;
	border-right: 1px solid;
	padding: 0px;
	padding-right: 14px;
	margin-right: 15px;
`;

const InstagramLogo = styled.img`width: 40%;`;

const SearchBarform = styled.div`width: 33%;`;

const InputSearch = styled.input`
	background-repeat: no-repeat;
	text-align: center;
	background-position: 56px 0px;
	width: 94%;
	height: 26px;
	padding: 11px;
	margin-left: 0px;
	border-radius: 5px;
	border: 1px solid grey;
	outline: none;
`;

const SearchBarRight = styled.div`
	width: 33%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Compass = styled.img`
	width: 15%;
	margin-left: 10px;
	margin-right: 10px;
	padding: 5px;
`;

const HeartSearch = styled.img`
	width: 15%;
	margin-left: 10px;
	margin-right: 10px;
	padding: 5px;
`;

const ProfileSearch = styled.img`
	width: 15%;
	margin-left: 10px;
	margin-right: 10px;
	padding: 5px;
`;

export const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid #0064ff;
	color: white;
	margin: 0 1em;
	padding: 0.25em 1em;
	outline: none;
	cursor: poiner;

	&:hover {
		padding: 0.5rem 2rem;
	}

	${(props) =>
		props.type === 'primary' &&
		css`
			background: #0064ff;
			color: black;
		`};
`;

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
			<SearchBarHeader>
				<SearchBarLeft>
					<Camera alt="camera" src={camera} />
					<InstagramLogo alt="instagram logo" src={logo} />
				</SearchBarLeft>
				<SearchBarform>
					<form onSubmit={this.searchSubmitted}>
						<InputSearch
							type="text"
							placeholder="Search"
							onChange={this.props.searchHandler}
							value={this.props.searching}
						/>
					</form>
				</SearchBarform>
				<SearchBarRight>
					<Compass alt="compass" src={compass} />
					<HeartSearch alt="heart" src={heart} />
					<ProfileSearch alt="profile" src={user} />
				</SearchBarRight>
				<Button type="primary" onClick={this.onClick}>
					Logout
				</Button>
			</SearchBarHeader>
		);
	}
}

export default SearchBar;
