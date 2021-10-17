import React, {useState} from 'react'

function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [postalcode, setPostalcode] = useState('');
    const [gender, setGender] = useState('');
    const [createDate, setCreateDate] = useState('');

    const register = (e) => {
        e.preventDefault();
        setCreateDate(new Date());

        fetch()
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
                    <input type='text' onChange={(e)=>{setPostalcode(e.target.value)}} value={postalcode} name='postalcode'/>
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
