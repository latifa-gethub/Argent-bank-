import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {useDispatch } from 'react-redux';
import { stockToken } from '../../Redux/store.js';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../data/data.js';

/**
 * fonction composant pour gérer le formulaire d'authentification
 * @returns {jsx element}
 */
const Login = () => {
  const dispatch = useDispatch();
  let [identity, setIdentity] = useState({});
  const [authorization, setAuthorization] = useState(true);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const rememberMe = localStorage.getItem('remember');

 /**
     * fonction pour recupérer les data depuis le formulaire,      
     * @param {object} data 
     */
  function getData(data) {
    setIdentity(data);
  }
  const infoUser = {
    email: identity.username,
    password: identity.password
  };
//useEffect pour faire une appelle Api on envoyant infoUser  
//et recupérer le token(identifiant),et dispatch l'action au redux
  useEffect(
    () => {
      if (infoUser.email !== undefined && infoUser.password !== undefined) {
        async function getApi(infoUser) {
       
          const reponse = await postLogin(infoUser);
          if (reponse.status === 200) {
            const token = reponse.body.token;            
            //stocker l'identifiant dans le store
            dispatch(stockToken(token));

            if (identity.remember) {
              localStorage.setItem('email', infoUser.email);
              localStorage.setItem('password', infoUser.password);
              localStorage.setItem('remember', identity.remember);
            } else {
              localStorage.clear();
            }
            navigate('/profil');
          } else {
            setAuthorization(false);
          }
        }
        getApi(infoUser);
      }
    },
    [identity]
  );

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

          <button className="sign-in-button">Sign In</button>
          {authorization === false && <span className='error-identifiant'>identifiants incorrects</span>}
        </form>
      </section>
    </div>
  );
};

export default Login;
