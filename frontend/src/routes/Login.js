import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const submit = () => {

    }

    return (
        <div className='form'>
            <form onSubmit={submit}>
                <div className='formitem'>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' onChange={(e)=>{setUsername(e.target.value)}} value={username} name='username'/>
                </div>
                <div className='formitem'>
                    <label htmlFor='password'>Password: </label>
                    <input type='text' onChange={(e)=>{setPassword(e.target.value)}} value={password} name='password'/>
                </div>
            </form>
        </div>
    )
}

export default Login
