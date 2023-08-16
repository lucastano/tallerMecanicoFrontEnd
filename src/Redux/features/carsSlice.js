import { createSlice } from "@reduxjs/toolkit";

const initialState = [];//estado inicial lista vacia
const carsSlice = createSlice({
 name: "carsSlice",
 initialState,
 reducers: {
 reset: state => initialState,
  //devuelve estado inicial
cargaInicialCars: (state,accion) => {
    
 const listaCars=accion.payload;

 return listaCars;
 },

 
    },
});

   export const {  cargaInicialCars} = carsSlice.actions;
   export default carsSlice.reducer;