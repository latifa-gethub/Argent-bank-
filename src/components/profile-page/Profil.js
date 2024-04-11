import React, { useEffect } from 'react';
import Header from './header/Header';
import TransactionButton from './section-account/TransactionButton';
import ItemAccountContent from './section-account/ItemAccountContent';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfil } from '../../data/data';
import { stockInfoUser } from '../../Redux/store';
import { useNavigate } from 'react-router-dom';

/**
 * Function component to display profil when user authentified
 * @returns {JSX.Element}
 */
const Profil = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const token=useSelector((state)=>state.userSlice.token)
 
  //requette pour authentifier l'utilisateur et despatch infoUser au store 
useEffect(()=>{   
  async function getStatus(token){
    const response=await getUserProfil(token)  
      
    if(response && response.status===200){

      const infoUser=response.body      
      dispatch(stockInfoUser(infoUser))         
    }else if(response === 'Unauthorized'){
     navigate('/*')
    }
  }  
   getStatus(token) 
},[])
   
  return (

    <div className="main bg-dark">
      <Header />
      
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <ItemAccountContent
          accountTitle="Argent Bank Checking (x8349)"
          accountAmount="$2,082.79"
          description="Available Balance"
        />
        <TransactionButton />
      </section>
      <section className="account">
        <ItemAccountContent
          accountTitle="Argent Bank Savings (x6712)"
          accountAmount="$10,928.42"
          description="Available Balance"
        />
        <TransactionButton />
      </section>
      <section className="account">
        <ItemAccountContent
          accountTitle="Argent Bank Credit Card (x8349)"
          accountAmount="$184.30"
          description="Current Balance"
        />
        <TransactionButton />
      </section>
    </div>
  );
};

export default Profil;
