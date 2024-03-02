import React from 'react';
import Header from './header/Header';
import TransactionButton from './section-account/TransactionButton';
import ItemAccountContent from './section-account/ItemAccountContent';


const Profil = () => {
  
  
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
