import React, { Component } from 'react';
import CommentSection from '../commentSection/CommentSection';
import Post from '../postContainer/Post';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
	return (
		<div className="postContainer">
			<Post
				id={props.id}
				username={props.post.username}
				thumbnail={props.post.thumbnailUrl}
				image={props.post.imageUrl}
				likes={props.post.likes}
			/>
			<CommentSection comments={props.post.comments} timestamp={props.post.timestamp} />
		</div>
	);
};

PostContainer.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.string,
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string,
		likes: PropTypes.number,
		timestamp: PropTypes.string,
		comments: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string,
				username: PropTypes.string,
				text: PropTypes.string
			})
		)
	})
};

export default PostContainer;
