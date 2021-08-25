import React from 'react';
import Header from './components/Header.js';
import Post from './components/Post.js';
import './styles/Center.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="align-posts-center">
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}

export default App;
