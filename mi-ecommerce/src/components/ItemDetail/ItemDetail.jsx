import React from 'react'
import { Button, Card } from 'react-bootstrap'
import adidas from '../../imgs/adidas.jpg'



function ItemDetail({producto}) {
  return (
    <div>
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={adidas}/>
            <Card.Body>
              <p>{producto.title}</p>
              <p>{producto.description}</p>
              <p>{producto.price}</p>
            </Card.Body>
            <Button variant="success" onClick = {()=>{}} > Detalle del producto</Button>
        </Card>

    </div>
  )
}

export default ItemDetail