import React, { Component } from 'react';
import Comment from '../commentSection/Comment';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
	return (
		<div className="comment-section">
			{props.comments.map((obj) => <Comment username={obj.username} text={obj.text} key={obj.id} id={obj.id} />)}
			<form>
				<input type="text" placeholder="Add a comment..." />
			</form>
			<p>{props.timestamp}</p>
		</div>
	);
};

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			username: PropTypes.string,
			text: PropTypes.string
		})
	)
};

export default CommentSection;