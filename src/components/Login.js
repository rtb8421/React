import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/login', {
        username, 
        password  
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <center>
      
      <div className='container'>

      <h1>Login Form</h1>
      
    <form className='login' onSubmit={handleLogin}>
      <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> <br/> <br/>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br/> <br/>

      <button type="submit">Login</button>
    </form>
    </div>
    </center>
      

  );
}

export default Login;
