import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Product from './components/Product'
import Table from './components/Table'
class App extends Component {
  render() {
    const colors = ["red", "blue", "green"];

    return (
      <div>
        <Table colors={colors} />
      </div>
    );
  }
}

export default App;
