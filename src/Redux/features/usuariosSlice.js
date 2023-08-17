import { createSlice } from "@reduxjs/toolkit";

const initialState = [];//estado inicial lista vacia
const usersSlice = createSlice({
 name: "usersSlice",
 initialState,
 reducers: {
 reset: state => initialState,
  //devuelve estado inicial
cargaInicialUsers: (state,accion) => {
    
 const listaUsers=accion.payload;

 return listaUsers;
 },
 addUser:(state,accion)  => {
  
 const usuario=accion.payload;
 return [...state,usuario]; 
 }

 
    },
});

   export const {  cargaInicialUsers,addUser} = usersSlice.actions;
   export default usersSlice.reducer;