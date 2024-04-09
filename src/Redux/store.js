import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'; 

const initialState = { token: '', infoUser: {} };
//creer une partie d'etat de store
export const userSlice = createSlice({
  name: 'userSlice',
  //l'etat ou données que le store peut gérer pour moi
  initialState,
  //les interaction possible avec mes données
  //une fonction qui accepte l'etat actuelle et l'action quand peut faire
  reducers: {
    stockToken: (state, action) => {
      state.token = action.payload;
    },
    stockInfoUser: (state, action) => {
      state.infoUser = action.payload;
    },
    videInfo:(state,action)=>{
    
     state.token=action.payload
     state.infoUser=action.payload
     
    },
    modifUser:(state,action)=>{
       const {firstName,lastName}=action.payload
       state.infoUser.firstName=firstName
       state.infoUser.lastName=lastName
    }
  }
});
export const { stockToken, stockInfoUser,videInfo,modifUser } = userSlice.actions;
 
export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer     
  }
});
 
