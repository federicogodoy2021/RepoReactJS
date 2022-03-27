import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { getItems } from '../components/Items/store'
import ItemList from '../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'


function ItemListContainer(producto) {

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

    <ul>  
        <ItemList productos = {products}/>
    </ul>
    

  )
}

export default ItemListContainer