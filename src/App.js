import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'

class App extends Component {
<<<<<<< HEAD

  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!

  render() {
    return (
      <div id="app">
        <BlogPost />
        <div id="seperator"></div>
        <div className="wrapper">
          <ColorBox opacity={1} />
        </div>
=======
  
  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!
  
  render() {
    return (
      <div id="app">
          <BlogPost />
          <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
          </div>
>>>>>>> dca8fc1cb6a743de804aaed394426a35fd5e3018
      </div>
    )
  }
}

export default App;