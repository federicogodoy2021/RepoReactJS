import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import {useCartContext} from '../../context/CartContext'


function ItemDetail({producto}) {

  const {addToCart} = useCartContext()
  

  const onAdd = (cantidad) =>{
    setOnButton('on')
    addToCart({...producto, cantidad: cantidad})
}

  const [onButton, setOnButton] = useState('button')

  const GoToCart = () => {
    return(
      <Link to='/Cart'>
        <Button variant="success">Ir al carrito</Button>
      </Link>
    )
  }
  const BuyMore = () => {
    return(
      <div>
        <Link to='/detalle/'>
          <Button variant="success">Continuar comprando</Button>
        </Link>
      </div>  
    )
  }
  return (
    <div>
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img style={{width:300, height:300}} variant="top" src={producto.foto}/>
            <Card.Body>
              <p>{producto.title}</p>
              <p>{producto.description}</p>
              <p>{`$${producto.price}`}</p>
              <br />
              {
                onButton === 'button'?
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
                :
                <>
                  <div>
                    <GoToCart/>
                    <br />
                    <br />
                    <BuyMore/>
                  </div>
                </>
              }
            </Card.Body>
        </Card>
    </div>
  )
  }
  

export default ItemDetail