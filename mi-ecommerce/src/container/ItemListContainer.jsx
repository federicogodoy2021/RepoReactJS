import React, { useEffect, useState } from 'react'
import { getItems } from '../components/Items/store'
import ItemList from '../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'


function ItemListContainer() {

    const [products, setProducts] = useState([])
    const {id} = useParams()


      useEffect(() =>{
        if (id) {
            getItems
        .then(res => setProducts(res.filter(products => products.type === id)))
        .catch((err) => {console.error(`Error: ${err}`)})
        .finally(() => {console.log("Finalizado")})

            
        } else {
            getItems
        .then(res => setProducts(res))
        .catch((err) => {console.error(`Error: ${err}`)})
        .finally(() => {console.log("Finalizado")})
        }
    }, [id])


      
return (
<>
  <ItemList productos = {products}/> 
</>
)
}

export default ItemListContainer