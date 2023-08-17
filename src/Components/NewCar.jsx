import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import {useSelector } from 'react-redux';

function NewCar() {

    //por el momento es ficticio
    const usuarios=useSelector((state)=>state.listaUsers);
    
  return (
    <Container>
        <Row>
            <Col sm={10}>
            <Form>
        <Form.Group className='mb-3'>
            <Form.Label> Marca</Form.Label>
            <Form.Control type='text' placeholder='Ingrese marca'/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label> Modelo</Form.Label>
            <Form.Control type='text' placeholder='Ingrese Modelo'/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label> Color</Form.Label>
            <Form.Control type='text' placeholder='Ingrese Color'/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label> Año</Form.Label>
            <Form.Control type='text' placeholder='Ingrese Año'/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label> Matricula</Form.Label>
            <Form.Control type='text' placeholder='Ingrese Matricula'/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label> Usuario</Form.Label>
            <Form.Select arial-label='Default select example'>
            <option>Seleccione...</option>
                {
                    usuarios.map((us)=>(
                        <option key={us.id} value={us.id} >{us.firstName+" "+us.lastName}</option>

                    ))

                }

            </Form.Select>
        </Form.Group>
    </Form>
            </Col>
        </Row>
    </Container>
  
  )
}

export default NewCar