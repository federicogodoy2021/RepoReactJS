import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext'

function LegendsInCart() {
    const {cartList, emptyCart, finalPrice, finalQty} = useCartContext()

    if(cartList.length > 0){  
        return(
        <>
          <h1>Cantidad total de la productos: {`${finalQty()}`}</h1>
          <h1>Monto total a pagar: {`$${finalPrice()}`}</h1>
        </>  
        )}
        else{      
          return(
           <>
            <h1 onClick={emptyCart} >El carrito se encuentra vacio</h1>
            <div>
              <Link to='/detalle/'>
                <Button variant="success">Continuar comprando</Button>
              </Link>
            </div>
          </>         
      )}
}

export default LegendsInCart