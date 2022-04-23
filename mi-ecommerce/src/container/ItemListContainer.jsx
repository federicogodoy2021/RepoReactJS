import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import Loading from '../components/Loading/Loading'


function ItemListContainer() {  
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    const {id} = useParams()


      useEffect(() =>{
        const db = getFirestore()

        const queryCollection = collection(db, 'items')

        const filterQuery = id ? query(queryCollection, where('type','==', id)) : queryCollection
        getDocs(filterQuery)
        .then(resp => setProducts( resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        .catch((err) => {console.error(`${err}: Algo ha fallado y no se han podido cargar los productos`)})
        .finally(() => (setLoading(false)))
        
}, [id])
    
return (
<>
  {loading ? <Loading className='pt-5'/> : <ItemList productos = {products}/>}
</>
)
}

export default ItemListContainer