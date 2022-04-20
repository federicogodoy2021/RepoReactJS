import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../FormCart/FormCart.css'

function FormCart() {
    const [classForm, setClassForm] = useState()
    const closeForm = () => {
        setClassForm('none')
    }
  return (
<div className='formCart' style={{display:`${classForm}`}}>
    <h1>Datos de envío</h1>

    <Form>
        <Form.Group className="mb-3">
            <Form.Label className='label'>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label className='label'>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='label'>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label className='label'>Domicilio</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su calle y número" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label className='label'>Telefono</Form.Label>
            <Form.Control type="number" placeholder="Ingrese su N° de telefono" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Guardar los datos para su proxima compra" />
        </Form.Group>
        <Button variant="primary" onClick={closeForm}>
            Enviar Datos
        </Button>
    </Form>
</div>
  )
}

export default FormCart