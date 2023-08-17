const url='http://localhost:5196/'


export const obtenerVehiculos=()=>{
    
    return fetch(`${url}api/cars`, {
      method: 'GET',
    })
      .then((response)=>response.json())
      .then((json)=>{ 
        return json;
      })
  
  }

  export const obtenerUsuarios=()=>{
    
    return fetch(`${url}api/Users/GetAll`, {
      method: 'GET',
    })
      .then((response)=>response.json())
      .then((json)=>{ 
        return json;
      })
  
  }
//funciona


export const agregarUsuario=(object)=>{
 console.log('object', object);
  return fetch(`${url}api/users`, {
       method: 'POST',
       headers: {
         'Content-type': 'application/json',
       },
       
       body: JSON.stringify(object)
     })
     .then((response)=>response.json())
        .then((json)=>{
         
          if(json.codigo!=200){
            
            return Promise.reject(json)
          }else{

             return json;
          }
         
        })
        .catch( 
          (error)=>{
           
            if(error.codigo==409){
              throw new Error(error.message?error.message:"Credenciales invalidas");
            }
            if(error.message=='Failed to fetch'){
              
              throw new Error("hubo un error!");
            }
            
          }

        );
}


///////////////////////////////response.json()/////////////////////////

export const inicio=(object)=>{
 
   return fetch(`${url}login.php`, {
        method: 'POST',
        body: JSON.stringify(object) ,
        headers: {
          'Content-type': 'application/json;',
        },
      })
        .then((response)=>response.json())
        .then((json)=>{
         
          if(json.codigo!=200){
            
            return Promise.reject(json)
          }else{

             return json;
          }
         
        })
        .catch( 
          (error)=>{
           
            if(error.codigo==409){
              throw new Error(error.message?error.message:"Credenciales invalidas");
            }
            if(error.message=='Failed to fetch'){
              
              throw new Error("hubo un error!");
            }
            
          }

        );
}




export const obtenerDepartamentos=(token,id)=>{
  return fetch(`${url}departamentos.php`,{
    method:'GET',
    headers:{
      'Content-type': 'application/json;',
      'apikey':token,
      'iduser':id,

    }
  })
  .then((response)=>response.json())
  .then((json)=>{return json;})
}
export const obtenerCiudades=(token,id)=>{
  
  return fetch(`${url}ciudades.php`,{
    method:'GET',
    headers:{
      'Content-type': 'application/json;',
      'apikey':token,
      'iduser':id,
    }
  })
  .then((response)=>response.json())
  .then((json)=>{return json;})
}

export const obtenerOcupaciones=(token,id)=>{
  return fetch(`${url}/ocupaciones.php`,{
    method:'GET',
    headers:{
      'Content-type': 'application/json;',
      'apikey':token,
      'iduser':id,
    }
  })
  .then((response)=>response.json())
  .then((json)=>{return json;})
}

export const nuevoCenso=(object,apikey,iduser)=>{
 
console.log("objeto en services",object)
  return fetch(`${url}personas.php`, {
       method: 'POST',
       body: JSON.stringify(object) ,
       headers: {
         'Content-type': 'application/json;',
         'apikey':apikey,
         'iduser':iduser
       },
     })
       .then((response)=>response.json())
       .then((json)=>{
         return json;
       })
}


export const obtenerTotalCensados=(token,id)=>{
  return fetch(`${url}/totalCensados.php`,{
    method:'GET',
    headers:{
      'Content-type': 'application/json;',
      'apikey':token,
      'iduser':id,


    }
  })
  .then((response)=>response.json())
  .then((json)=>{return json;})
}

export const eliminarCensado=(apikey,iduser,idCenso)=>{
 
  return fetch(`${url}/personas.php?idCenso=${idCenso}`,{
    method:'DELETE',
    headers:{
      'Content-type': 'application/json;',
      'apikey':apikey,
      'iduser':iduser,


    }
  })
  .then((response)=>response.json())
  .then((json)=>{return json;})
}
