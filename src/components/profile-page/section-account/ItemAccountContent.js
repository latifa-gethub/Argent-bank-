import React from 'react';

const ItemAccountContent = (props) => {
  return (
    <div className="account-content-wrapper">
      <h3 className="account-title">{props.accountTitle}</h3>
      <p className="account-amount">{props.accountAmount}</p>
      <p className="account-amount-description">{props.description}</p>
    </div>
  );
};

export default ItemAccountContent;
