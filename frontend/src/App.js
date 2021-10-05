import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, {useState, createContext} from 'react';
import Home from './routes/Home';
import Cart from './routes/Cart';
import Login from './routes/Login';
import NavBar from './components/NavBar';

export const authContext = createContext();

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/cart' component={Cart}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
