import React from 'react'
import cart from '../../../imgs/cart.png'
import { useCartContext } from '../../../context/CartContext'
import '../NavBar.css'

function CartWidget() {
  const {cartList} = useCartContext()

  const totalQty = cartList.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0)

  const hiddenQty = (showQty)  =>{
    if(totalQty === 0){
      return showQty = "qtyCart0"
    }else{
      return  showQty = "qtyCart"
    }}
  
  return (

    <>
      <div className='cartWidget'>
        <img
             src= {`${cart}`}
             alt="carrito"
             style={{ height:'42px', width: '42px' }}/>

        <h4 className={hiddenQty()}>{totalQty}</h4>
      </div>
    </>
  )
}

export default CartWidget