import React from 'react'
import { Col, Row, Table,Container } from 'react-bootstrap'
import { useSelector} from 'react-redux'

function Cars() {

    const cars=useSelector((state)=>state.listCars);
console.log('cars', cars)
   
  return (
    <Container>
      <Row>
        <Col sm={10}>
        <Table striped bordered hover>
    <thead>
      <tr>
       
        <th>Brand</th>
        <th>Model</th>
        <th>Year</th>
        <th>Owner</th>
      </tr>
    </thead>
    <tbody>
        {
            cars.map((item) => (
                <tr key={item.id}>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td>{item.year}</td>
                  <td>{item.owner.id}</td>
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

export default Cars
