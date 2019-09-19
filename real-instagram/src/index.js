import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './authentication/Authenticate';
import Login from './components/login/Login';

const ComponentFromWithAuthenticate = Authenticate(App)(Login);

ReactDOM.render(<ComponentFromWithAuthenticate />, document.getElementById('root'));
