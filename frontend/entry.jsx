import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
//testing
import { signup, login, logout } from './actions/session_actions';
import { requestSinglePost,
         requestAllPosts,
         createPost,
         deletePost,
         likePost,
         dislikePost } from './actions/post_actions';
import { createLike, deleteLike } from './util/like_api_util';

window.likePost = likePost;
window.dislikePost = dislikePost;
window.createLike = createLike;
window.deleteLike = deleteLike;
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
