import React, { Component } from 'react';

import postHeart from '../../instaImg/postHeart.svg';

import comment from '../../instaImg/comment.png';
import './PostContainer.css';

const Post = (props) => {
	return (
		<div className="post">
			<div className="postHeader">
				<img className="userAvatar" src={props.thumbnail} alt="user small avatar" />
				<h4 className="userName">{props.username}</h4>
			</div>
			<img src={props.image} />
			<div className="postFooterTop">
				<img
					onClick={() => props.postLiked(props.post)}
					className="postHeart"
					alt="heart icon"
					src={postHeart}
				/>
				<img className="commentIcon" alt="comment icon" src={comment} />
			</div>
			<div className="postFooterBottom">
				<p>{props.likes} likes</p>
			</div>
		</div>
	);
};

export default Post;
