import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, {useState, createContext} from 'react';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Cart from './routes/Cart';
import PrivateRoute from './routes/PrivateRoute';
import Electronics from './routes/categories/Electronics';
import Jewelery from './routes/categories/Jewelery';
import Mens from './routes/categories/Mens';
import Womens from './routes/categories/Womens';

export const authContext = createContext();
export const cartContext = createContext();

function App() {
  const auth = useProvideAuth();
  const cartOperations = useCartOperations();

  return (
    <div className="App">
      <authContext.Provider value={auth}>
        <cartContext.Provider value={cartOperations}>
          <BrowserRouter>
            <NavBar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <PrivateRoute path='/cart' component={Cart}/>
              <Route path='/Electronics' component={Electronics}/>
              <Route path='/Jewelery' component={Jewelery}/>
              <Route path="/Men's clothing" component={Mens}/>
              <Route path="/Women's clothing" component={Womens}/>
            </Switch>
          </BrowserRouter>
        </cartContext.Provider>
      </authContext.Provider>
    </div>
  );
}

function useProvideAuth(){
  const [user,setUser] = useState({username: '', email: ''});

  const signin = (username, email) => {
    setUser({username: username, email: email});
  }

  const signout = () => {
    setUser({username: '', email: ''});
  } 

  return {user, signin, signout}
}


function useCartOperations(){
  const [cartList, setCartList] = useState([])

  const minus = (id, qty) => {
    if(qty===1){
      setCartList(cartList.filter(item=>item.id!==id))
    } else{
      setCartList(
        cartList.map(item => 
          item.id===id ? {...item, qtyadded: item.qtyadded-1} : item
        )
      )
    }
    
  }

  const add = (id) => {
    setCartList(
      cartList.map(item =>
        item.id===id ? {...item, qtyadded: item.qtyadded+1} : item)
    )
  }

  const remove = (id) => {
    setCartList(
      cartList.filter(item=>item.id!==id)
    )
  }

  return {cartList, setCartList, minus, add, remove}
}


export default App;
