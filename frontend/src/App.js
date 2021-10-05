import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, {useState, createContext} from 'react';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Cart from './routes/Cart';
import PrivateRoute from './routes/PrivateRoute';

export const authContext = createContext();

function App() {
  const auth = useProvideAuth();

  return (
    <div className="App">
      <authContext.Provider value={auth}>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <PrivateRoute path='/cart' component={Cart}/>
          </Switch>
        </BrowserRouter>
      </authContext.Provider>
    </div>
  );
}

function useProvideAuth(){
  const [user,setUser] = useState(null);

  const signin = () => {
    setUser('me');
  }

  const signout = () => {
    setUser(null);
  } 

  return {user, signin, signout}
}

export default App;
