import { useCartContext } from '../../context/CartContext'
import { Badge, ListGroup, Button, Form, InputGroup } from 'react-bootstrap'
import EmptyCartButton from './EmptyCartButton/EmptyCartButton';
import LegendsInCart from './LegendsInCart/LegendsInCart';
import './Cart.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import { useState } from 'react';

function Cart() {

const {cartList,removeItems, finalPrice, emptyCart} = useCartContext()
const [id, setId] = useState(null)
const [dataForm, setDataForm] = useState({name:'', lastName:'',email:'', phone:'', address:''})

const createOrder = async (e)=> {
  e.preventDefault()

  let order = {}

  order.buyer = dataForm

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
  .catch(err => console.log(err))
  .finally(() => emptyCart())




//Actulizar el stock luego de crear la orden
  const queryUpdateById = await query(queryCollection,
    where(documentId(), 'in', cartList.map(it => it.id)))

    const batch = writeBatch(db)

    await getDocs(queryUpdateById)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad})))
    .catch(error => console.log(error))
    .finally(() => console.log('Stock actualizado'))
    
    batch.commit()

  
}

const handleChange = (e) =>{
  setDataForm({...dataForm, [e.target.name] : e.target.value})
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
      {cartList.length !== 0 ? <Button onClick={createOrder}>Finalizar Compra</Button> : <Button style={{display:"none"}}/>}

      <div className='formCart'>
        <h1>Datos de envío</h1>

        <form 
                className='mt-5'
                onSubmit={createOrder}                 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email' 
                    name='email1'
                    placeholder='repita email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                
                <button className="btn btn-outline-primary"  onClick={createOrder} >Terminar Compra</button>
            </form>





        {/* <Form onSubmit={createOrder}>
            <Form.Group className="mb-3">
                <Form.Label className='label'>Nombre</Form.Label>
                <input type="text" onChange={handleChange} defaultValue={dataForm.name} placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='label'>Apellido</Form.Label>
                <input type="text" onChange={handleChange} defaultValue={dataForm.lastName} placeholder="Ingrese su apellido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='label'>Email</Form.Label>
                <input type="email" onChange={handleChange} defaultValue={dataForm.email} placeholder="Ingrese su email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='label'>Domicilio</Form.Label>
                <input type="text" onChange={handleChange} defaultValue={dataForm.address} placeholder="Ingrese su calle y número" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='label'>Telefono</Form.Label>
                <input type="number" onChange={handleChange} defaultValue={dataForm.phone} placeholder="Ingrese su N° de telefono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Guardar los datos para su proxima compra" />
            </Form.Group>
            <Button variant="primary" onClick={createOrder}>
                Enviar Datos
            </Button>
        </Form> */}
      
      </div>
    </div>
    


)
}

export default Cart
