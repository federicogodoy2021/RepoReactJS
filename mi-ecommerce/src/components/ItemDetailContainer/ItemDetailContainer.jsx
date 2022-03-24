import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItems } from '../Items/store'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    const {detalleId} = useParams()
    


useEffect(()=>{
    getItems
    .then(res => setProducto(res.find(prod => prod.id === detalleId)))
    .catch(err => console.log(err))
    .finally(() => console.log("Finalizado OK"))

}, [])

  return (
    <div style= {{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer