import { useCartContext } from '../../context/CartContext'
import { Badge, ListGroup, Button, Form} from 'react-bootstrap'
import LegendsInCart from './LegendsInCart/LegendsInCart';
import './Cart.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import { useState } from 'react';

function Cart() {

const {cartList,removeItems, finalPrice, emptyCart} = useCartContext()
const [id, setId] = useState(null)
const [dataForm, setDataForm] = useState({name:'', lastName:'',email:'', phone:'', address:'', email2:''})
const [showForm, setShowForm] = useState('none')
const [showButton, setShowButton] = useState('')

const createOrder = async (e)=> {
  e.preventDefault()

  let order = {}
  order.buyer = dataForm
  
  order.items = cartList.map(cartItems =>{
    const id = cartItems.id
    const nombre = cartItems.title
    const precio = cartItems.price * cartItems.cantidad
    const cantidad = cartItems.cantidad

    return {id, nombre, precio, cantidad}
  })

  order.total = finalPrice()

//Traer base de datos Firestore
  const db = getFirestore()
  const queryCollectionOrders = collection(db, 'orders')

//Crear orden
await addDoc(queryCollectionOrders, order)
  .then(({id}) => setId(id))
  .catch(err => console.log(err))
  .finally(() => emptyCart(), setShowForm('none'))

//Actulizar el stock luego de crear la orden
  const queryCollection = collection(db, 'items')
  const queryUpdateById = await query(queryCollection,
    where(documentId(), 'in', cartList.map(it => it.id)))

    const batch = writeBatch(db)

    await getDocs(queryUpdateById)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad})))
    .catch(error => console.log(error))
    
    batch.commit()
}

//Mostrar formulario / Esconder botón
const showDataForm = () =>{
  setShowForm('flex')
  setShowButton('none')
}

//Capturar datos del formulario
const handleChange = (e) =>{
  setDataForm({...dataForm, [e.target.name] : e.target.value})
}
  
  return (
    <div>
      {cartList.map(prod => 
      <div>
        <ListGroup key= {prod.id} as="ul">
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
      {cartList.length === 0 ? <Button style={{display :"none"}}/> : <Button onClick={() => (setShowForm('none'), emptyCart())}>Limpiar Carrito</Button> }
      <br /><br />

      {id && <label className='alert alert-success'>{`El ID de su compra es: ${(id)}`}</label>}
      {cartList.length !== 0 ? <Button onClick={showDataForm} style={{display:showButton}} >Finalizar Compra</Button> : <Button style={{display:"none"}}/>}

     
      <div className='formCart' style={{display:showForm}}>
        <h1>Datos de envío</h1>
        <Form onSubmit={createOrder} className='mt-5'>
          <Form.Label className='label'>Nombre</Form.Label>
          <input type="text" name='name' onChange={handleChange} value={dataForm.name} placeholder="Ingrese su nombre"/>
          <Form.Label className='label'>Apellido</Form.Label>
          <input type="text" name='lastName' onChange={handleChange} value={dataForm.lastName} placeholder="Ingrese su apellido"/>
          <Form.Label className='label'>Domicilio</Form.Label>
          <input type="text" name='address' onChange={handleChange} value={dataForm.address} placeholder="Ingrese su calle y número"/>           
          <Form.Label className='label'>Telefono</Form.Label>
          <input type="number" name='phone' onChange={handleChange} value={dataForm.phone} placeholder="Ingrese su N° de telefono"/>
          <Form.Label className='label'>Email</Form.Label>
          <input type="email" name='email' onChange={handleChange} value={dataForm.email} placeholder="Ingrese su email"/>
          <Form.Label className='label'>Confirmación de email</Form.Label>
          <input type="email" name='email2' onChange={handleChange} value={dataForm.email2} placeholder="Repita su email"/>   
          {((dataForm.email !== dataForm.email2) || (dataForm.email === '') || (dataForm.email2 === '') || (dataForm.address === '') || (dataForm.lastName === '') || (dataForm.name === '') || (dataForm.phone === '')) ? <div><br /><br /><h6>Corrobore campos vacios y/o corfirmación de emails</h6></div> : <><br /><br /> <Button variant="primary" onClick={createOrder}>Enviar Datos</Button></>}
          <br/><br/>
        </Form>
      </div>
    </div>
)
}

export default Cart
