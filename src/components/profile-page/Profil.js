import React, { useEffect } from 'react';
import Header from './header/Header';
import TransactionButton from './section-account/TransactionButton';
import ItemAccountContent from './section-account/ItemAccountContent';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfil } from '../../data/data';
import { stockInfoUser } from '../../Redux/store';
import { useNavigate } from 'react-router-dom';
const Profil = () => {
  const dispatch=useDispatch()
  const token=useSelector((state)=>state.userSlice.token)
 const navigate=useNavigate()
useEffect(()=>{   
  async function getStatus(token){
    const response=await getUserProfil(token)  
     console.log(response)
    if(response && response.status===200){
      const infoUser=response.body
      console.log("info user avec apel api aprés envoyer token",infoUser)
      dispatch(stockInfoUser(infoUser))         
    }else if(response === 'Unauthorized'){
     navigate('/*')
    }
  }  
   getStatus(token) 
},[])
  
    
  /* const infoUtilisateur=useSelector((state)=>state.userSlice.infoUser) */
  
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
