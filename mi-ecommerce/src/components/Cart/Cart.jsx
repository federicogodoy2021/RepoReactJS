import React from 'react'
import { useCartContext } from '../../context/CartContext'

function Cart() {

  const {cartList, emptyCart} = useCartContext
  return (

    <div>
      {cartList.map(prod => <li key= {prod.id}>Nombre {prod.name}
                            Precio {prod.price}                                 
                            Descripión {prod.description}
                            </li>)}
                            <button onClick={emptyCart}>Vaciar Cart</button>
    </div>
  )
}

export default Cart