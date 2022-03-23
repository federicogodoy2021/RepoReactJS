import React, { useEffect, useState } from 'react'

function  ItemCount (props) {

const [count, setCount] = useState(props.initial)

useEffect(() => {

  //Logica para setear la cantidad minima y maxima de productos basados en el stock de los mismos
    if(count < 1){
      alert('La cantindad a comprar no puede ser menor a 1 unidad')
      setCount(props.initial)
    }else if(count > props.stock){
      alert(`No contamos con más stock. Unidades disponibles: ${props.stock}`)
      setCount(props.stock)
      
    }})  
  return (
    
    //Se renderizan dos botones para incrementar y disminuir la cantidad
    <div>
        <button onClick={() => setCount(count + 1)}>AGREGAR</button>
        <br/>
        <label>
          Cantidad de productos: 
          <br/>
          {count}
        </label>
        <br/>
        <button onClick={() => setCount(count - 1)}>QUITAR</button>

    </div>
  )
  }

export default ItemCount
