import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { putUser } from '../../../data/data';
import { modifUser } from '../../../Redux/store';

/**
 * Function component to display Form for editing user's Firstname/Lastname
 * @returns {jsx element}
 */
const Header = () => {
  const dispatch = useDispatch();
  const infoUtilisateur = useSelector(state => state.userSlice.infoUser);
  const token = useSelector(state => state.userSlice.token);

  const firstName = infoUtilisateur.firstName;
  const lastName = infoUtilisateur.lastName;
  const [editName, setEditName] = useState(false);
  const [newinfo, setNewinfo] = useState();
  const [errorName,setErrorName]=useState(false)
  const { register, handleSubmit,reset } = useForm();

  function edit(newData) {
  
    const regex = /^[A-Za-z]+$/;
  const verifyFirstName=regex.test(newData.firstName)
  const verifyLastName=regex.test(newData.lastName)
  if(verifyFirstName && verifyLastName){
    setNewinfo(newData);
    setErrorName(false)
  }
  else{
    setErrorName(true)
  }
  
    
  }
  //utiliser useEffect pour une requette Api si les champs sont
  //valident et modifier l'etat du store
  
  useEffect(
    () => {
      if (newinfo && newinfo.firstName !== '' && newinfo.lastName !== '') {
        async function getApi(token, newinfo) {
          const response = await putUser(token, newinfo);

          if (response.status === 200) {
            dispatch(modifUser(newinfo));
            setEditName(false);
          }
        }
        getApi(token, newinfo);
      }
    },
    [newinfo]
  );

  return (
    <div className="header">
      <h1>
        Welcome back<br />
        <span style={{ display: editName && 'none' }}>
          {firstName} {lastName} !
        </span>
      </h1>
      <button
        className="edit-button"
        onClick={() => {
          setEditName(true);
        }}
        style={{ display: editName && 'none' }}
      >
        Edit Name
      </button>
      {editName &&
        <div>
          <form className="form-editName" onSubmit={handleSubmit(edit)}>
            
            <div className="wrapper-input-editName">
              <input                 
                defaultValue={firstName}
                name="firstName"
                {...register('firstName')}
                type="text"
                id="input-edit-firstName"
              />
              
              <input                
                defaultValue={lastName}
                name="lastName"
                {...register('lastName')}
                type="text"
                id="input-edit-lastName"
              />
            </div>
           
            <div className="wrapper-btn-editName">
              <button type="submit" className="save">
                Save
              </button>
              <button
                className="cancel"
                onClick={() => {
                  setEditName(false);
                  reset();
                  setErrorName(false)
                }}
              >
                Cancel
              </button>             
            </div>
            
          </form>
        </div>}
        {errorName && <p className='errorName'>Les chiffres ne sont pas authorisés</p>}

    </div>
  );
};

export default Header;
