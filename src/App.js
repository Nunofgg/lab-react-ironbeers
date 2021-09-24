import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import BeerRandom from './components/BeerRandom';
import BeerCreate from './components/BeerCreate';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeersList} />
        <Route path="/beers/:id" component={BeerDetails} />
        <Route path="/random-beer" component={BeerRandom} />
        <Route path="/create-beer" component={BeerCreate} />
      </Switch>
    </div>
  );
}

export default App;
