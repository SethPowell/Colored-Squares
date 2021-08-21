import React, { Component } from 'react';
import Squares from "./squares"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Color Squares</h1>
        <Squares />
      </div>
    );
  }
}