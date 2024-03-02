import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const NavBar = () => {
  const info=useSelector((state)=>state.userSlice.infoUser)
  console.log("ds vaBar",info)
  const nameUser=info.firstName
  const lastName=info.lastName  
  return (
    <nav className="main-nav">     
      <Link className="main-nav-logo" to={'/'}>
        <img
          className="main-nav-logo-image"
          src="../assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {nameUser}{lastName}
      <div>

        <Link className="main-nav-item" to={'/login'}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    
  );
};
