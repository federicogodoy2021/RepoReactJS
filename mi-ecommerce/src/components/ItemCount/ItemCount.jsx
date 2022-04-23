import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function  ItemCount ({stock, initial, onAdd}) {

const [count, setCount] = useState(initial)

useEffect(() => {

  //Seteo de cantidad minima y maxima de productos basados en el stock de los mismos
    if(count < 1){
      alert('La cantindad a comprar no puede ser menor a 1 unidad')
      setCount(initial)
    }else if(count > stock){
      alert(`No contamos con más stock. Unidades disponibles: ${stock}`)
      setCount(stock)
      
    }})  

   const addToCart = () => {
      onAdd(count)
}
 
  return (
    
    <div style= {{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
        <Button onClick={() => setCount(count + 1)}>AGREGAR</Button>
        <label style= {{textAlign:'center'}}>
          Cantidad de productos: 
        <br/>
        <div>{count}</div>
        </label>
        <Button onClick={() => setCount(count - 1)}>QUITAR</Button>
        <br />
        <Button variant="success"  onClick = {addToCart}>Añadir al carrito</Button>
    </div>
  )

  }

export default ItemCount
 