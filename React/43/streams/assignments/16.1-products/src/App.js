import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Products from './components/products/Products';
import Product from './components/products/product/Product';
import PageNotFound from './components/errorPages/PageNotFound';
import Routes from './router/Routes';
function App() {
  return (
    <div className="App ui container">
      <BrowserRouter>
        <Header />
        <Route path={Routes.home} exact={true} component={HomePage} />
        <Route path={Routes.products} exact component={Products} />
        <Route path={Routes.product} component={Product} />
        <Route path={Routes.pageNotFound} exact component={PageNotFound} />
      </BrowserRouter>
    </div>
  );
}

export default App;
