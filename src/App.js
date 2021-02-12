import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './constainers/BurgerBuilder/BurgerBuilder';
import Checkout from './constainers/Checkout/Checkout';

export class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    )
  }
}

export default App;

