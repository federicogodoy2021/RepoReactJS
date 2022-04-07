import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    const {detalleId} = useParams()
    
useEffect(()=>{
  
  const db = getFirestore()
  
  const queryDoc = doc(db, 'items', detalleId)
  getDoc(queryDoc)
  
  .then(res => setProducto({id: res.id, ...res.data()}))

}, [detalleId])

  return (
    <div style= {{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer