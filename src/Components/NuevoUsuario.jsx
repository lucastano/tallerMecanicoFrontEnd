import React, { useState } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { agregarUsuario } from '../Services/Service';
import { addUser } from '../Redux/features/usuariosSlice';


function NuevoUsuario() {
const [nombre, setNombre] = useState("")
const [apellido, setApellido] = useState("")
const [telefono, setTelefono] = useState("")
const [direccion, setDireccion] = useState("")
const [lvlUser, setLvlUser] = useState(0)

const dispatch=useDispatch();

    const nivelUsuario=[
        {id:1,nombre:'Standart'},
        {id:2,nombre:'Intermedio'},
        {id:3,nombre:'Superior'},
    ]

    const handleChangeNombre=(e)=>{
        setNombre(e.target.value);

    }
    const handleChangeApellido=(e)=>{
        setApellido(e.target.value);

    }
    const handleChangeTelefono=(e)=>{
        setTelefono(e.target.value);

    }
    const handleChangeDireccion=(e)=>{
        setDireccion(e.target.value);

    }
    const handleChangeNivelUsuario=(e)=>{
        console.log('first', e.target.value)
        setLvlUser(e.target.value);

    }

    const handleClick=(e)=>{
       
        const usuario={
            firstName:nombre,
            lastName:apellido,
            phone:telefono,
            address:direccion,
            userLvl:lvlUser

        }

       
        agregar(usuario);

        
    }

    const agregar= async(usuario)=>{
        const respuesta=await agregarUsuario(usuario)
        dispatch(addUser(usuario));


    }

  return (
    <Container>
        <Row>
            <Col sm={10}>
            <Form onSubmit={handleClick}>
        <Form.Group className='mb-3'>
            <Form.Label> Nombre</Form.Label>
            <Form.Control onChange={handleChangeNombre} type='text' placeholder='Ingrese Nombre'/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label> Apellido</Form.Label>
            <Form.Control onChange={handleChangeApellido} type='text' placeholder='Ingrese Apellido'/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label> Telefono</Form.Label>
            <Form.Control onChange={handleChangeTelefono} type='text' placeholder='Ingrese Telefono'/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label> Direccion</Form.Label>
            <Form.Control onChange={handleChangeDireccion} type='text' placeholder='Ingrese Direccion'/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label> Nivel de usuario</Form.Label>
           
            <Form.Select onChange={handleChangeNivelUsuario}  arial-label='Default select example'>
            <option>Seleccione...</option>
                {
                    nivelUsuario.map((us)=>(
                        <option key={us.id} value={us.id} >{us.nombre}</option>

                    ))

                }

            </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3'>
            
        <Button  variant="primary" type="submit">Agregar</Button>
        </Form.Group>
    </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default NuevoUsuario