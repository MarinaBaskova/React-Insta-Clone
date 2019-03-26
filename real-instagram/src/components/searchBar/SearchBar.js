import React, { Component } from 'react';

const SearchBar = (props) => {
	return (
		<div className="searchBar">
			<div className="searchBarLeft">
				<img alt="camera" />
				<img alt="instagram logo" />
			</div>
			<div className="serchBarform">
				<form>
					<input type="text" placeholder="Search" />
				</form>
			</div>
			<div className="serchBarRight">
				<img alt="compass" />
				<img alt="heart" />
				<img alt="profile" />
			</div>
		</div>
	);
};

export default SearchBar;
