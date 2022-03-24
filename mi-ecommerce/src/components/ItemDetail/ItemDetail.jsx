import React from 'react'
import { Card } from 'react-bootstrap'
import BuyButton from '../BuyButton/BuyButton'



function ItemDetail({producto}) {
  return (
    <div>
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img style={{width:300, height:300}} variant="top" src={producto.foto}/>
            <Card.Body>
              <p>{producto.title}</p>
              <p>{producto.description}</p>
              <p>{producto.price}</p>
              <div><BuyButton/></div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemDetail