import { useCartContext } from '../../context/CartContext'
import { Badge, ListGroup, Button } from 'react-bootstrap'
import EmptyCartButton from './EmptyCartButton';
import LegendsInCart from './LegendsInCart';
import './Cart.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import { useState } from 'react';

function Cart() {

const {cartList,removeItems, finalPrice, emptyCart} = useCartContext()
const [id, setId] = useState(null)

const createOrder = async (e)=> {
  e.preventDefault()

  let order = {}

  order.buyer = {name: 'Federico', phone: '3415765751', email: 'federico@gmail.com'}

  order.items = cartList.map(cartItems =>{
    const id = cartItems.id
    const nombre = cartItems.title
    const precio = cartItems.price * cartItems.cantidad

    return {id, nombre, precio}
  })

  order.total = finalPrice()

  const db = getFirestore()
  const queryCollection = collection(db, 'orders')

//Crear orden
await addDoc(queryCollection, order)
  .then(({id}) => setId(id))

//Actulizar el stock luego de crear la orden
  const queryUpdateById = await query(queryCollection,
    where(documentId(), 'in', cartList.map(it => it.id)))

    const batch = writeBatch(db)
    await getDocs(queryUpdateById)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad})))
    .catch(error => console.log(error))
    .finally(() => emptyCart())
    
    batch.commit()


    
    /* //Actualizar seteando un nuevo stock por ID (No funcional por el momento)
     const queryUpdate = doc(db, 'items', '2Ex9iQah59T53SWpvz4a')
      updateDoc(queryUpdate,{
      stock:20
    }) */

}
  
  return (

    <div>
      {cartList.map(prod => 
      <div>
        <ListGroup key= {prod.id} as="ul" >
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h1>{prod.title}</h1>
                <h3>{prod.description}</h3>
              </div>
              <h3>Precio:{`$${(prod.price * prod.cantidad)}.-`}</h3>
            </div>
            <Badge bg="primary" pill>
              <div className='qtyOfItems'>
                <h2>Unidades: {prod.cantidad}</h2>
                <Button className='botonEliminar' onClick={()=>removeItems(prod.id)}>Eliminar</Button>
              </div>
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </div>)}
      <div>
        <LegendsInCart/>
      </div>
      <EmptyCartButton/><br /><br />
      {id && <label className='alert alert-success'>{`El ID de su compra es: ${(id)}`}</label>}
      {cartList.length !== 0 ? <Button onClick={createOrder}>Finalizar Orden</Button> : <Button style={{display:"none"}}/>}
    </div>
)
}

export default Cart
