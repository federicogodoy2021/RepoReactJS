import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap'

function Cart() {

  const {cartList, emptyCart} = useCartContext()
  return (

    <div>
      {cartList.map(prod => 
      <li key= {prod.id}>
            Nombre: {prod.title}
            <br />
            Precio: {prod.price}                                 
            <br />
            Descripión: {prod.description}
            <br />
            Cantidad: {prod.cantidad}
      </li>)}
      <br/>
      <Button onClick={emptyCart}>Vaciar Cart</Button>
    </div>
  )
}

export default Cart