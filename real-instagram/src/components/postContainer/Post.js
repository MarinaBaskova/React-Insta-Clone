import React, { Component } from 'react';

const Post = (props) => {
	return (
		<div className="post">
			<div className="postHeader">
				<img src={props.thumbnail} alt="user small avatar" />
				<h4>{props.username}</h4>
			</div>
			<img src={props.image} />
			<div className="postFooterTop">
				<img src="#" alt="heart icon" />
				<img src="#" alt="coment icon" />
			</div>
			<div className="postFooterBottom">
				<p>{props.likes}</p>
			</div>
		</div>
	);
};

export default Post;
