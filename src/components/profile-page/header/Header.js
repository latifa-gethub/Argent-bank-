import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfil } from '../../../data/data';
import { recupUser } from '../../../Redux/store'; 

const Header = () => {
  const dispatch=useDispatch()
    const token=useSelector((state)=>state.userSlice.token )
 const info=useSelector((state)=>state.userSlice.infoUser)
 console.log(info)
 const nameUser=info.firstName
 const lastName=info.lastName
 console.log(lastName)
  async function getStatus(data){
    const response=await getUserProfil(data)  
    //console.log(response)
    if(response.status===200){
      const infoUser=response.body
      dispatch(recupUser(infoUser)) 
      console.log(infoUser.firstName) 
    }
  } 
  
  getStatus(token)   
  return (
    <div className="header">
        <h1>Welcome back<br />{lastName} { nameUser}!</h1>
        <button className="edit-button">Edit Name</button>
    </div>
  )
}

export default Header