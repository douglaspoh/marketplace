import React, {useState, useContext} from 'react'
import {authContext} from '../App';
import {useHistory, useLocation} from 'react-router-dom';

function Login() {
    const auth = useContext(authContext);
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname:'/'}};

    const login = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => {
            if(!res.ok){
                throw new Error(res.text())
            }
            return res.text()
        })
        .then(data => {
            if(data==='Login successful'){
                console.log('logged in')
                auth.signin(username)
                setUsername('')
                setPassword('')
                history.replace(from);
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='form'>
            <form onSubmit={login}>
                <div className='formitem'>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' onChange={(e)=>{setUsername(e.target.value)}} value={username} name='username'/>
                </div>
                <div className='formitem'>
                    <label htmlFor='password'>Password: </label>
                    <input type='text' onChange={(e)=>{setPassword(e.target.value)}} value={password} name='password'/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
