import React, { Component } from 'react';
import Comment from '../commentSection/Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';
import dots from '../../instaImg/dots.svg';

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
			<div className="commentSection">
				{this.props.comments.map((comment) => (
					<Comment username={comment.username} text={comment.text} key={comment.id} id={comment.id} />
				))}
				<p>{this.props.timestamp}</p>
				<div className="addComment">
					<form onSubmit={this.submitComment}>
						<input
							className="addCommentInput"
							type="text"
							placeholder="Add a comment..."
							name="newCommentText"
							value={this.state.newCommentText}
							onChange={this.handleChanges}
						/>
					</form>
					<img className="dots" src={dots} alt="add to comments tree dots" />
				</div>
			</div>
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
