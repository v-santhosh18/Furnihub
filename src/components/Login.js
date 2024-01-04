import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import c1 from '../assets/c1.png';
import { emailValidator, passwordValidator } from './LoginValidator';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [input, setInput] = React.useState({ email: '', password: '' });
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

  const formSubmitter = (e) => {
    e.preventDefault();

    if (!emailValidator(input.email)) return setErrorMessage('Enter valid Details');
    if (!passwordValidator(input.password)) return setErrorMessage('Wrong password');

  
    login({ name: input.username });

   
    navigate('/');
  };

  return (
    <div className='HomeContainer'>
      <img src={c1} alt='Login' className='imageLogin' />

      <form className='sub-container' onSubmit={formSubmitter}>
        <div className='headers'>Welcome Back!</div>

        <div className='inputs'>
          {errorMessage.length > 0 && <div style={{ marginBottom: '3px', color: 'red' }}>{errorMessage}</div>}

          <div className='input'>
            <input type='text' placeholder='Username' name='username' onChange={handleChange} />
          </div>
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
          <button type='submit' onClick={notify}>Login</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}