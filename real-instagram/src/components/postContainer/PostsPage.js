import React, { Component } from 'react';
import PostContainer from './PostContainer';

const PostsPage = (props) => {
	console.log(props.data);
	return (
		<div>
			{props.data.length ? (
				props.data.map((post) => (
					<PostContainer
						key={post.id}
						post={post}
						newPostCommentSubmitted={props.newPostCommentSubmitted}
						postLiked={props.postLiked}
					/>
				))
			) : null}
		</div>
	);
};

export default PostsPage;
