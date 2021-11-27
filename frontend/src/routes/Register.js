import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';

function Register() {
    const history = useHistory();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [postalcode, setPostalcode] = useState('');
    const [gender, setGender] = useState('');

    const register = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password,
                first_name: firstname,
                last_name: lastname,
                postal_code: postalcode,
                gender: gender
            })
        })
        .then(res => {
            if(!res.ok){
                throw new Error(res.text())
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            setFirstname('')
            setLastname('')
            setEmail('')
            setUsername('')
            setPassword('')
            setPostalcode('')
            setGender('')
            history.push('/login')
        })
        .catch(err => {
            console.log(err)
        })
    }
  
    return (
        <div className='form'>
            <form onSubmit={register}>
                <div className='formitem'>
                    <label htmlFor='firstname'>First Name: </label>
                    <input type='text' onChange={(e)=>{setFirstname(e.target.value)}} value={firstname} name='firstname'/>
                </div>
                <div className='formitem'>
                    <label htmlFor='lastname'>Last Name: </label>
                    <input type='text' onChange={(e)=>{setLastname(e.target.value)}} value={lastname} name='lastname'/>
                </div>
                <div className='formitem'>
                    <label htmlFor='email'>Email Address: </label>
                    <input type='text' onChange={(e)=>{setEmail(e.target.value)}} value={email} name='email'/>
                </div>
                <div className='formitem'>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' onChange={(e)=>{setUsername(e.target.value)}} value={username} name='username'/>
                </div>
                <div className='formitem'>
                    <label htmlFor='password'>Password: </label>
                    <input type='text' onChange={(e)=>{setPassword(e.target.value)}} value={password} name='password'/>
                </div>
                <div className='formitem'>
                    <label htmlFor='postalcode'>Postal Code: </label>
                    <input type='text' onChange={(e)=>{setPostalcode(Number(e.target.value))}} value={postalcode} name='postalcode'/>
                </div>
                <div className='formitem'>
                    <label htmlFor='gender'>Gender: </label>
                    <input type='text' onChange={(e)=>{setGender(e.target.value)}} value={gender} name='gender'/>
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
