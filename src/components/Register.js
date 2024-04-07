import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Register() {
    const navigate=useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister =async (e) => {
        e.preventDefault()
        await axios.post("http://127.0.0.1/api_for_seeree_react/register.php", { name, email, password, age, phone })
            .then(response => {
                alert(response.data)
                if(response.data){
                    navigate('/login');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            });
    }

    return (
        <>
        <center>

        <div className="register">
            <h1>Registration Page</h1>
            <br/>

        <form onSubmit={handleRegister}>
            <input type="text" name="name" placeholder="Enter Name" onChange={(event) => setName(event.target.value)} /> <br /> <br/>
            <input type="email" name="email" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} /> <br /> <br/>
            <input type="password" name="psd" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} /> <br /> <br/>
            <input type="number" name="age" placeholder="Enter age" onChange={(event) => setAge(event.target.value)} /> <br /> <br/>
            <input type="number" name="phn" placeholder="Enter Phone number" onChange={(event) => setPhone(event.target.value)} /> <br /> <br/>
            <input type="submit" name="btn" value="Register" />
        </form>
        </div>
        </center>
        </>
    );
}

export default Register;
