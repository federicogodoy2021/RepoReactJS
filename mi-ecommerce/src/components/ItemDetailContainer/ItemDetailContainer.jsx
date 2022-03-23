import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItems } from '../Items/store'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

useEffect(()=>{
    getItems
    .then(res => setProducto(res.find(prod => prod.id === 1)))
    .catch(err => console.log(err))
    .finally(() => console.log("Finalizado OK"))

}, [])

const {detalleId} = useParams()
console.log(detalleId)

console.log(producto)

  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer