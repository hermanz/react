import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Product from './components/Product'
import Table from './components/Table'

class App extends Component {
  render() {
    const asins = ["asin0", "asin1", "asin2", "asin3", "asin4"];

    return (
      <div>
        <Table asins={asins} />
      </div>
    );
  }
}

export default App;
