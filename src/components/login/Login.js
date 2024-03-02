import React, { useRef, useState } from 'react';
import { useForm, } from 'react-hook-form';
 
import { useSelector, useDispatch } from 'react-redux'
import { stockToken } from '../../Redux/store.js';
import { Link,useNavigate } from 'react-router-dom';
import { postLogin } from '../../data/data.js';

const Login = () => {
  const dispatch=useDispatch()
  
  let [identifiant, setIdentifiant] = useState(null);
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate()

  const rememberMe = localStorage.getItem('remember');

  async function getData(data) {
    setIdentifiant(data);

    const login = {
      email: data.username,
      password: data.password
    };
    //appel api
    const reponse = await postLogin(login);

    if (reponse.status === 200) {
      const token = reponse.body.token;
      console.log(token);
      dispatch(stockToken(token))
      if (data.remember) {
        localStorage.setItem('email', login.email);
        localStorage.setItem('password', login.password);
        localStorage.setItem('remember', data.remember);
      } else {
        localStorage.clear();
      }
      navigate('/profil')
    } else {
      console.log('erreur');
    }
  }

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(getData)} >
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              defaultValue={
                rememberMe === 'true' ? localStorage.getItem('email') : ''
              }
              required
              {...register('username')}
              type="text"
              id="username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              defaultValue={
                rememberMe === 'true' ? localStorage.getItem('password') : ''
              }
              required
              {...register('password')}
              type="password"
              id="password"
            />
          </div>
          <div className="input-remember">
            <input
              name="remember"
              {...register('remember')}
              type="checkbox"
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* PLACEHOLDER DUE TO STATIC SITE */}

          <button   className="sign-in-button">
            Sign In
          </button>

          {/* SHOULD BE THE BUTTON BELOW  */}
          {/*  */}
        </form>
      </section>
    </div>
  );
};

export default Login;
