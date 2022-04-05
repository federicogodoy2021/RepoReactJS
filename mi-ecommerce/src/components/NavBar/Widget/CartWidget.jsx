import React from 'react'
import cart from '../../../imgs/cart.png'

function CartWidget() {
  return (
    <>
        <img
             //className="d-block w-100"
             src= {`${cart}`}
             alt="carrito"
             style={{ height:'42px', width: '42px' }}

        />
    </>
  )
}

export default CartWidget