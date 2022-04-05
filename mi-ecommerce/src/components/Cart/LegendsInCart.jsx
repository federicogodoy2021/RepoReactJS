import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'

function LegendsInCart() {
    const {cartList, emptyCart} = useCartContext()

    const totalAmount = cartList.map(item => item.price * item.cantidad).reduce((prev, curr) => prev + curr, 0);

    const totalQty = cartList.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);


    if(cartList.length > 0){  
        return(
        <>
          <h1>Cantidad total de la productos: {`${totalQty}`}</h1>
          <h1>Monto total a pagar: {`$${totalAmount}`}</h1>
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