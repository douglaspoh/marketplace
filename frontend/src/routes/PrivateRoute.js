import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';
import { authContext } from '../App';

function PrivateRoute({component:Cart, ...rest}) {
    const auth = useContext(authContext);
    
    return (
            <Route {...rest}
                render = {routeProps => auth.user.username ? <Cart {...routeProps}/>
                                                  : <Redirect to = '/login'/>}
            />
    )
}

export default PrivateRoute;
