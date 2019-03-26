import React, { Component } from 'react';
import Comment from '../commentSection/Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';
import dots from '../../instaImg/dots.svg';

const CommentSection = (props) => {
	return (
		<div className="commentSection">
			{props.comments.map((obj) => <Comment username={obj.username} text={obj.text} key={obj.id} id={obj.id} />)}
			<p>{props.timestamp}</p>
			<div className="addComment">
				<form>
					<input className="addCommentInput" type="text" placeholder="Add a comment..." />
				</form>
				<img className="dots" src={dots} alt="add to comments tree dots" />
			</div>
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
