import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import{obtenerVehiculos} from '../Services/Service'
import { cargaInicialCars } from '../Redux/features/carsSlice';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    

    useEffect(() => {

        obtenerDatos();
      
    }, [])
    
    const obtenerDatos=async()=>{
        

        const cars=await obtenerVehiculos();
        dispatch(cargaInicialCars(cars))

    }

    const irautos=(e)=>{
        

        console.log('acaentro')
        
        navigate("/cars")

    }


  return (
    <>
     <div>Dashboard</div>
     <button onClick={()=>irautos()} >ver autos</button>

    </>
   
  )
}

export default Dashboard