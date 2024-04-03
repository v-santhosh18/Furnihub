// import React, { useState } from 'react';
// import './Signup.css';
// import { Link, useNavigate } from 'react-router-dom';
// import signupbg from '../assets/signupbg.png';
// import { emailValidator, passwordValidator } from './LoginValidator';
// import axios from 'axios';

// export default function Signup() {
//   const [input, setInput] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//     setErrorMessage('');
//   };

//   const formSubmitter = async (e) => {
//     e.preventDefault();

//     const { username, email, password, confirmPassword } = input;

//     // Basic validation
//     if (!username.trim() || !emailValidator(email)) {
//       return setErrorMessage('Please enter a valid username and email');
//     }

//     if (!passwordValidator(password)) {
//       return setErrorMessage('Create a valid password');
//     }

//     if (password !== confirmPassword) {
//       return setErrorMessage('Passwords do not match');
//     }

//     try {
//       const response = await axios.post('https://localhost:8080/signup', {
//         username,
//         email,
//         password,
//       });

//       console.log('Account created successfully!', response.data);
//       navigate('/login');
//     } catch (error) {
//       console.error('Signup failed:', error.response.data);
//       setErrorMessage('Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className='box-container'>
//       <img src={signupbg} alt='Signup' className='imageSignup' />

//       <div className='sub-box-container'>
//         <div className='header'>Create Account</div>

//         <div className='inputs'>
//           {errorMessage.length > 0 && (
//             <div style={{ marginBottom: '3px', color: 'red' }}>{errorMessage}</div>
//           )}

//           <div className='input'>
//             <input type='text' placeholder='Username' name='username' onChange={handleChange} />
//           </div>

//           <div className='input'>
//             <input type='email' placeholder='Email' name='email' onChange={handleChange} />
//           </div>

//           <div className='input'>
//             <input type='password' placeholder='Password' name='password' onChange={handleChange} />
//           </div>

//           <div className='input'>
//             <input
//               type='password'
//               placeholder='Confirm password'
//               name='confirmPassword'
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className='account'>
//           Already have an account?{' '}
//           <Link to='/login' className='linkab'>
//             Login
//           </Link>
//         </div>

//         <div className='submit-container'>
//           <button type='submit' className='submit' onClick={formSubmitter}>
//             Create Account
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import './Signup.css';
import { Navigate, useNavigate } from 'react-router-dom';
import signupbg from '../assets/signupbg.png';
import { Link } from 'react-router-dom';
import { emailValidator, passwordValidator } from './LoginValidator';
import axios from 'axios'; // Import Axios library

export default function Signup() {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const formSubmitter = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = input;

    // Basic validation
    if (!username.trim() || !emailValidator(email)) {
      return setErrorMessage('Please enter a valid username and email');
    }

    if (!passwordValidator(password)) {
      return setErrorMessage('Create a valid password');
    }

    if (password !== confirmPassword) {
      return setErrorMessage('Passwords do not match');
    }

    try {
      // Make the POST request to your backend endpoint
      const response = await axios.post('https://localhost:8080/signup', {
        username,
        email,
        password,
        confirmPassword,
      });

      // Check if the response contains data
      if (response && response.data) {
        // Optionally, you can perform actions with the response data here
        console.log('Signup successful:', response.data);
        
        // Navigate to the login page or perform any other actions
        navigate('/login');
      } else {
        // Handle the case where response or response.data is undefined
        setErrorMessage('Signup failed: No data received from server');
      }
    } catch (error) {
      // Handle errors from the Axios request
      console.error('Signup error:', error);
      setErrorMessage('Signup failed: An error occurred');
    }
  };

  return (
    <div className='box-container'>
      <img src={signupbg} alt='Signup' className='imageSignup'></img>
      <div className='sub-box-container'>
        <div className='header'>Create Account</div>
        <div className='inputs'>
          {errorMessage.length > 0 && (
            <div style={{ marginBottom: '3px', color: 'red' }}>{errorMessage}</div>
          )}
          <div className='input'>
            <input type='text' placeholder='Username' name='username' onChange={handleChange}></input>
          </div>
          <div className='input'>
            <input type='email' placeholder='Email' name='email' onChange={handleChange}></input>
          </div>
          <div className='input'>
            <input type='password' placeholder='Password' name='password' onChange={handleChange}></input>
          </div>
          <div className='input'>
            <input type='password' placeholder='Confirm password'  name='confirmPassword' onChange={handleChange}></input>
          </div>
        </div>
        <div className='account'>Already have an account? 
          <Link to='/login' className='linkab'>
            Login
          </Link>
        </div>
        <div className='submit-container'>        
          <button  type='submit' className='submit' onClick={formSubmitter}>Create Account</button>
        </div>
      </div>
    </div>
  );
}
