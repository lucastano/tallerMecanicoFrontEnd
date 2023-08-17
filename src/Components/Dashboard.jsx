import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import{obtenerVehiculos,obtenerUsuarios} from '../Services/Service'
import { cargaInicialCars } from '../Redux/features/carsSlice';
import { cargaInicialUsers } from '../Redux/features/usuariosSlice';
import { Outlet, useNavigate } from 'react-router-dom';
import Menu from './Menu';

function Dashboard() {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    

    useEffect(() => {

        obtenerDatos();
      
    }, [])
    
    const obtenerDatos=async()=>{
        

        const cars=await obtenerVehiculos();
        const users=await obtenerUsuarios();
        dispatch(cargaInicialCars(cars))
        dispatch(cargaInicialUsers(users))

    }

    
return (
    <>
     <Menu></Menu>
     <Outlet></Outlet>
     

    </>
   
  )
  


  
  }


export default Dashboard