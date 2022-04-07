import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, limit, query, where} from 'firebase/firestore'


function ItemListContainer() {  
    const [products, setProducts] = useState([])

    const {id} = useParams()


      useEffect(() =>{
        const db = getFirestore()

        const queryCollection = collection(db, 'items')

        const filterQuery = id ? query(queryCollection, where('type','==', id), limit(3)) : queryCollection
        getDocs(filterQuery)
        .then(resp => setProducts( resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        .catch((err) => {console.error(`Error: Algo ha fallado y no se han podido cargar los productos`)})
        .finally(() => {console.log("Se han cargado todos los productos correctamente")})
}, [id])

console.log(products)
      
return (
<>
  <ItemList productos = {products}/> 
</>
)
}

export default ItemListContainer