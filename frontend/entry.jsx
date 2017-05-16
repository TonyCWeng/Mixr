import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';

window.signup = signup;
window.login = login;
window.logout = logout;


document.addEventListener('DOMContentLoaded', () => {
    console.log("hello");
    const root = document.getElementById("root");
    const store = configureStore();
    window.store = store;
    ReactDOM.render(<h1>Hello</h1>, root);
});
