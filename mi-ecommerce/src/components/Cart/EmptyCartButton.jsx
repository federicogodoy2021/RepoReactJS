import React from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

function EmptyCartButton() {

  const {cartList, emptyCart} = useCartContext()

    if(cartList.length === 0){
      const displayNone = {display :"none"}
        return (
        <>
          <Button style={displayNone}/>
        </>
         )
      }else{
        return(
        <>
          <Button onClick={emptyCart}>Limpiar Carrito</Button>
        </>
        )
      }
    
}

export default EmptyCartButton