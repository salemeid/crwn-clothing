import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route, Link } from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/crwn-clothing' component={HomePage}/>
        <Route path='/crwn-clothing/hats' component={HatPage}/>
      </Switch>
    </div>
  );
}

export default App;
