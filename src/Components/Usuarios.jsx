import React from 'react'
import { Container,Col,Row,Table } from 'react-bootstrap'
import { useSelector} from 'react-redux'

function Usuarios() {



    const usuarios=useSelector((state)=>state.listaUsers);
    console.log('usuarios', usuarios)
  return (
    <Container>
    <Row>
      <Col sm={10}>
      <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Telefono</th>
      <th>Direccion</th>
      <th>Nivel de socio</th>
    </tr>
  </thead>
  <tbody>
      {
          usuarios.map((item) => (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.userLvl}</td>
              </tr>
            ))
          
      }
    
   
  </tbody>
</Table>
      </Col>
    </Row>
  </Container>
  )
}

export default Usuarios