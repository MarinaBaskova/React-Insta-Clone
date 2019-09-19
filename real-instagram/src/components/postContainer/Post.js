import React from 'react';

import postHeart from '../../instaImg/postHeart.svg';

import comment from '../../instaImg/comment.png';

import styled from 'styled-components';
import UserNameReusable from '../styles/ReusableStyle';

const PostWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const PostHeader = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	padding-bottom: 10px;
	padding-top: 10px;
`;

const UserAvatar = styled.img`
	width: 5%;
	border-radius: 88px;
	margin-left: 10px;
	margin-right: 10px;
`;

const PostFooterTop = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-start;
	margin-top: 7px;
`;

const PostHeart = styled.img`
	width: 4%;
	margin-left: 5px;
	margin-right: 5px;
`;

const CommentIcon = styled.img`width: 4%;`;

const PostFooterBottom = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	padding-left: 10px;
	font-size: 12px;
	margin-bottom: 4px;
	margin-top: 4px;
	font-weight: bold;
`;

const Post = (props) => {
	return (
		<PostWrapper>
			<PostHeader>
				<UserAvatar src={props.thumbnail} alt="user small avatar" />
				<UserNameReusable font>{props.username}</UserNameReusable>
			</PostHeader>
			<img src={props.image} />
			<PostFooterTop>
				<PostHeart onClick={() => props.postLiked(props.post)} alt="heart icon" src={postHeart} />
				<CommentIcon alt="comment icon" src={comment} />
			</PostFooterTop>
			<PostFooterBottom>
				<p>{props.likes} likes</p>
			</PostFooterBottom>
		</PostWrapper>
	);
};

export default Post;
