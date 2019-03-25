import React, { Component } from 'react';
import Comment from '../commentSection/Comment';

const CommentSection = (props) => {
	return (
		<div className="comment-section">
			{props.comments.map((obj) => <Comment username={obj.username} text={obj.text} key={obj.id} />)}
			<form>
				<input type="text" placeholder="Add a comment..." />
			</form>
		</div>
	);
};

export default CommentSection;
