import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import c1 from '../assets/c1.png';
import { emailValidator, passwordValidator } from './LoginValidator';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Login() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const notify = () => toast.error("Login Failed", {
    position: toast.POSITION.BOTTOM_LEFT,
    className: "toast-message",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const formSubmitter = async (e) => {
    e.preventDefault();

    if (!emailValidator(input.email)) return setErrorMessage('Enter valid Details');
    if (!passwordValidator(input.password)) return setErrorMessage('Wrong password');

    try {
      const response = await axios.post('https://localhost:8080/login', {
        email: input.email,
        password: input.password
      });

      // Assuming your backend returns a token upon successful login
      const token = response.data.token;
      // Now you can perform actions like setting the token in localStorage, etc.
      
      // Call your login function from AuthContext, if needed
      login({ name: input.username });

      navigate('/'); // Redirect to homepage after successful login
    } catch (error) {
      console.error('Login failed:', error);
      notify(); // Notify user of login failure
    }
  };

  return (
    <div className='HomeContainer'>
      <img src={c1} alt='Login' className='imageLogin' />

      <form className='sub-container' onSubmit={formSubmitter}>
        <div className='headers'>Welcome Back!</div>

        <div className='inputs'>
          {errorMessage.length > 0 && <div style={{ marginBottom: '3px', color: 'red' }}>{errorMessage}</div>}

          <div className='input'>
            <input type='text' placeholder='Email' name='email' onChange={handleChange} />
          </div>

          <div className='input'>
            <input type='password' placeholder='Password' name='password' onChange={handleChange} />
          </div>
        </div>

        <div className='account'>
          <Link to='/' id='id1'>
            Login as Guest
          </Link>
          <Link to='/signup' className='linkabs'>
            <span>Signup</span>
          </Link>
        </div>

        <div className='submit-container'>
          <button type='submit'>Login</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
