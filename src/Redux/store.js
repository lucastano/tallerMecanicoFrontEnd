import { configureStore } from '@reduxjs/toolkit'
import carsSlice from './features/carsSlice'
import usersSlice from './features/usuariosSlice'


export const store = configureStore({
 reducer: {
 listCars: carsSlice,
 listaUsers:usersSlice
 
 
 },
})
