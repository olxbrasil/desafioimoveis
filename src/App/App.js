import React, { Component } from 'react';
import './App.scss';
import AppHero from './../components/AppHero/AppHero';

class App extends Component {
  render() {
    return (
      <div styleName="app">
        <AppHero />
      </div>
    );
  }
}

export default App;
