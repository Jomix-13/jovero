import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

// import './Signupform.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  
  useEffect(()=>{
    const errorHandler=[]
    if(username.length < 4||username.length > 14) errorHandler.push('Username must be between 4 & 14 cahracters')
    if(password.length < 6||password.length > 21) errorHandler.push('Password must be between 6 & 21 cahracters')
    if(!email.length) errorHandler.push('Please enter your email')
    setErrors(errorHandler)
  },[username,password,email])
  
  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signupUser({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <div className='formcontainer'>
    <form className='form' onSubmit={handleSubmit}>
      <ul className='error'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        {/* {errors.map((error, idx) => <li key={idx}>{error}</li>)} */}
      </ul>
      <label className='loginLable'>
        Email
        <input
          placeholder="Email"
          className='loginInput'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </label>
      <label className='loginLable'>
        Username
        <input
          placeholder="Username"
          className='loginInput'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
      </label>
      <label className='loginLable'>
        Password
        <input
          placeholder="Password"
          className='loginInput'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      </label>
      <label className='loginLable'>
        Confirm Password
        <input
          placeholder="Confirm Password"
          className='loginInput'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          />
      </label>
      <button 
        // disabled={errors.length ? true : false}
        hidden={errors.length ? true : false}
        type="submit">
          Sign Up
      </button>
    </form>
          </div>
          </>
  );
}

export default SignupFormPage;