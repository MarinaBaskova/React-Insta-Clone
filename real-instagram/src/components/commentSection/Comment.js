import React, { Component } from 'react';

const Comment = (props) => {
	return (
		<div>
			{props.username} {props.text}
		</div>
	);
};

export default Comment;
