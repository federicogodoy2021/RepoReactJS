import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BuyButton from '../BuyButton/BuyButton'

function Items({producto}) {

  return (
    <div>
        <Card.Footer>
          <Link to={`detalle/${producto.id}`}>
            <div>
                
                <div titulo = {producto.title}>{`${producto.title}`}</div>
                <div reseña = {producto.description}>{`${producto.description}`}</div>
                <div costo = {producto.price}>{`${producto.price}`}</div>

            </div>
            <Button variant="success" onClick = {()=>{}} > Detalle del producto</Button>
          </Link>
        </Card.Footer>
        <BuyButton/>



    </div>
  )
}

export default Items