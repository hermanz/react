import React, { Component } from 'react';
import './App.css';

import Table from './components/Table'

class App extends Component {
  render() {
    const asins = ["asin0", "asin1", "asin2", "asin3"];

    return (
      <div>
        <Table asins={asins} />
      </div>
    );
  }
}

export default App;
