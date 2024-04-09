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
  const { register, handleSubmit } = useForm();

  function edit(newData) {
    setNewinfo(newData);
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
                required
                placeholder={firstName}
                name="firstName"
                {...register('firstName')}
                type="text"
                id="input-edit-firstName"
              />
              <input
                required
                placeholder={lastName}
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
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>}
    </div>
  );
};

export default Header;
