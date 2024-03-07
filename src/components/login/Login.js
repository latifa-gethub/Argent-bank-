import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { stockToken } from '../../Redux/store.js';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../data/data.js';

const Login = () => {
  const dispatch = useDispatch();

  let [identifiant, setIdentifiant] = useState({});
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const rememberMe = localStorage.getItem('remember');

  function getData(data) {
    setIdentifiant(data);
  }
  const login = {
    email: identifiant.username,
    password: identifiant.password
  };
 
  useEffect(() => {
    if (login.email !== undefined && login.password !== undefined) {       
      async function getApi(login) {
        
        //appel api
        const reponse = await postLogin(login);
        if (reponse.status === 200) {
          
          const token = reponse.body.token;
          console.log(token);
          //donner une tache à redux
          dispatch(stockToken(token));
          if (identifiant.remember) {
            localStorage.setItem('email', login.email);
            localStorage.setItem('password', login.password);
            localStorage.setItem('remember', identifiant.remember);
          } else {
            localStorage.clear();
          }
          navigate('/profil');
        } else {
          console.log('erreur');
        }
      }
      getApi(login);
    }
    
  }, [identifiant]);

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(getData)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              defaultValue={
                rememberMe === 'true' ? localStorage.getItem('email') : ''
              }
              /* required */
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
             /*  required */
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

          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
