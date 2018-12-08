import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Prototype 01: Adding posts to existing list</h1>
            <p>Fetches posts from <a href="https://jsonplaceholder.typicode.com/posts" >https://jsonplaceholder.typicode.com/posts</a> and prepends posts added by tester using redux as state manager.</p>
          </header>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
