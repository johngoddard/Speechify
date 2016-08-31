import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';



document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser){
    console.log("Log 1");
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = window.store = configureStore(preloadedState);
  } else{
    console.log('log 3');
    store = window.store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
