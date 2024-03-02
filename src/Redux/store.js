import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
const initialState = { token: '' ,infoUser:{}};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    stockToken: (state, action) => {
      state.token = action.payload;
    },
  recupUser:(state,action)=>{
    state.infoUser=action.payload
  }
  }
});

 
export const { stockToken,recupUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
   /*  stock: userSlice */
   userSlice:userSlice.reducer
  }
});
