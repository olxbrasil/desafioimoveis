import React, { Component } from 'react';
import Title, { extraClasses } from './../components/Title/Title';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="App-header">
          <Title extraClasses={extraClasses.bigTitle} text="Comprar ou alugar?" />
        </div>
      </div>
    );
  }
}

export default App;
