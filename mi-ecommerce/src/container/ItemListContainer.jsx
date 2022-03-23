import React, { useEffect, useState } from 'react'
import { Button, CardGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import adidas from "../imgs/adidas.jpg"
import nike from "../imgs/nike.jpg"
import reebok from "../imgs/reebok.jpg"
import ItemCount from '../components/ItemCount/ItemCount'
import stock, { getItems } from '../components/Items/store'
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

/* titulo = {stock[0].title} reseña = {stock[0].description} costo = {stock[0].price} */
    <div >
        <CardGroup >
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={adidas}/>
            <Card.Body>
                <ItemList productos = {products}/>
                <ItemCount stock={stock[0].stock} initial={1}/>
                <Button variant="success" onClick = {()=>{}} > Detalle del producto</Button>
            </Card.Body>
        </Card>
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={nike}/>
            <Card.Body>
                <ItemList productos = {products}/>
                <ItemCount stock={stock[1].stock} initial={1}/>
                <Button variant="success" onClick = {()=>{}} > Detalle del producto</Button>
            </Card.Body>
        </Card>
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={reebok}/>
            <Card.Body>
                <ItemList productos = {products}/>
                <ItemCount productos = {products} stock={stock[2].stock} initial={1}/>
                <Button variant="success" onClick = {()=>{}} > Detalle del producto</Button>
            </Card.Body>
        </Card>
        </CardGroup>

    </div>
    

  )
}

export default ItemListContainer