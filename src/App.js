// @flow
import React, { Component } from 'react';
import './App.css';

import type { SomeNestedType } from './types.js';

type Props = SomeNestedType;

class App extends Component {
  props: Props

  render() {
    const { nestedProperty } = this.props;

    return (
      <div className="App">
        <p className="App-intro">
          { JSON.stringify(nestedProperty, null, 4)}
        </p>
      </div>
    );
  }
}

export default App;
