import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
//testing
import { signup, login, logout } from './actions/session_actions';
import { requestSinglePost, requestAllPosts, createPost, deletePost } from './actions/post_actions';
// import { getPost, getPosts, createPost, deletePost } from './util/post_api_util';

window.deletePost = deletePost;
window.createPost = createPost;
// window.getPost = getPost;
// window.getPosts = getPosts;
window.requestAllPosts = requestAllPosts;
window.requestSinglePost = requestSinglePost;
window.signup = signup;
window.login = login;
window.logout = logout;


document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
