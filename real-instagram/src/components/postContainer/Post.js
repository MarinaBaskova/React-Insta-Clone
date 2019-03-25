import React, { Component } from 'react';

const Post = (props) => {
	console.log(props);
	return (
		<div>
			<img src={props.thumbnail} />
			<img src={props.image} />
			<p>{props.likes}</p>
		</div>
	);
};

export default Post;
