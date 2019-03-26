import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
	return (
		<div>
			{props.username} {props.text}
		</div>
	);
};
Comment.propTypes = {
	username: PropTypes.string,
	text: PropTypes.string
};

export default Comment;
