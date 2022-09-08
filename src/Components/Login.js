import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        username: "",
        password: "",
    })

    const handleChange = e => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                navigate('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">
                        USERNAME:
                        <input onChange={handleChange} name="username" id="username"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        PASSWORD:
                        <input onChange={handleChange} type="password" name="password" id="password"/>
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </div>)
  }

  export default Login;