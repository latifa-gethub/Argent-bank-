import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { putUser } from '../../../data/data';
import { modifUser } from '../../../Redux/store';

const Header = () => {
  
  const dispatch = useDispatch();
  const infoUtilisateur = useSelector(state => state.userSlice.infoUser);
  const token = useSelector(state => state.userSlice.token);
   
  const firstName = infoUtilisateur.firstName;
  const lastName = infoUtilisateur.lastName;
  const [editName, setEditName] = useState(false);
  const [newinfo, setNewinfo] = useState();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
   
  function edit(newData) {
    console.log('new data', newData);
    setNewinfo(newData);
  }
  useEffect(
    () => {
      if (newinfo && newinfo.firstName !== '' && newinfo.lastName !== '') {
        console.log(newinfo);
        async function getApi(token, newinfo) {
          const response = await putUser(token, newinfo);
         
          if (response.status === 200) {
            console.log(response);
            dispatch(modifUser(newinfo));
            setEditName(false)
          }
        }
        getApi(token, newinfo);
      }
    },
    [newinfo]
  );
  function handleReset() {
    reset();
  }
  return (
    <div className="header">
      <h1>
        Welcome back<br />
       <span style={{display:editName && 'none'}}> {firstName} {lastName} !</span>
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
          <form onSubmit={handleSubmit(edit)}>
            <input
            required
              placeholder={firstName}
              name="firstName"
              {...register('firstName')}
              type="text"
              id="username"
            />
            <input
            required
              placeholder={lastName}
              name="lastName"
              {...register('lastName')}
              type="text"
              id="username"
            />
            <br />
            <button type="submit" className="save">
              Save
            </button>
            <button className="save" onClick={() => {
          setEditName(false);
        }}>
              Cancel
            </button>
          </form>
        </div>}
    </div>
  );
};

export default Header;
