import React, { Component } from 'react';
import logo from '../../instaImg/instagram.jpg';
import styled, { css } from 'styled-components';

const LoginContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
`;

const ImageLoginWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LogoLogin = styled.img`width: 50%;`;

const LogginInput = styled.input`
	background-repeat: no-repeat;
	text-align: center;
	background-position: 56px 0px;
	width: 94%;
	height: 26px;
	padding: 11px;
	margin: 0 auto;
	margin-bottom: 10px;
	border-radius: 5px;
	border: 1px solid grey;
	outline: none;
`;

const FormLogin = styled.form`
	display: flex;
	flex-direction: column;
	width: 15%;
`;

const BtnLogin = styled.button`
	width: 30%;
	margin: 0 auto;
	background: green;
	border-radius: 3px;
	border: 2px solid green;
	color: white;
	outline: none;
	cursor: poiner;
`;

const Login = (props) => {
	return (
		<LoginContainer>
			<ImageLoginWrap>
				<LogoLogin alt="instagram logo" src={logo} />
			</ImageLoginWrap>
			<FormLogin onSubmit={(e) => props.handleLogin(e)}>
				<LogginInput type="text" placeholder="Username" value={props.username} onChange={props.handleChanges} />
				<BtnLogin type="submit" value="Login">
					Login
				</BtnLogin>
			</FormLogin>
		</LoginContainer>
	);
};

export default Login;
