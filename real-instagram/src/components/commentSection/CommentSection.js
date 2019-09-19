import React, { Component } from 'react';
import Comment from '../commentSection/Comment';
import PropTypes from 'prop-types';

import dots from '../../instaImg/dots.svg';

import styled, { css } from 'styled-components';

const CommentSectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 10px;
	margin-right: 10px;
	line-height: 1.6;
`;

const AddComment = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-top: 1px dotted lightgrey;
	font-size: 10px;
	width: 100%;
	margin-top: 5px;
`;

const CommentForm = styled.form`width: 100%;`;

const AddCommentInput = styled.input`
	background: none;
	border: none;
	padding: 15px;
	width: 100%;
	outline: none;
`;

const Dots = styled.img`width: 2%;`;

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newCommentText: ''
		};
	}

	handleChanges = (e) => {
		this.setState({ newCommentText: e.target.value });
	};

	submitComment = (e) => {
		e.preventDefault();
		this.props.newCommentSubmitted(this.state.newCommentText);
		console.log(this.props.comments);
		this.setState({ newCommentText: '' });
	};

	render() {
		return (
			<CommentSectionWrapper>
				{this.props.comments.map((comment) => (
					<Comment username={comment.username} text={comment.text} key={comment.id} id={comment.id} />
				))}
				<p>{this.props.timestamp}</p>
				<AddComment>
					<CommentForm onSubmit={this.submitComment}>
						<AddCommentInput
							type="text"
							placeholder="Add a comment..."
							name="newCommentText"
							value={this.state.newCommentText}
							onChange={this.handleChanges}
						/>
					</CommentForm>
					<Dots src={dots} alt="add to comments tree dots" />
				</AddComment>
			</CommentSectionWrapper>
		);
	}
}

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
