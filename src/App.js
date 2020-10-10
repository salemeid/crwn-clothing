import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/crwn-clothing' component={HomePage}/>
        <Route path='/crwn-clothing/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
