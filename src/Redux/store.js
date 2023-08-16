import { configureStore } from '@reduxjs/toolkit'
import carsSlice from './features/carsSlice'


export const store = configureStore({
 reducer: {
 listCars: carsSlice,
 
 
 },
})
