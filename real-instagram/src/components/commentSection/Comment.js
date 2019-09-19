import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import UserNameReusable from '../styles/ReusableStyle';

const Comment = (props) => {
	return (
		<div>
			<UserNameReusable>{props.username}</UserNameReusable> {props.text}
		</div>
	);
};
Comment.propTypes = {
	username: PropTypes.string,
	text: PropTypes.string
};

export default Comment;
