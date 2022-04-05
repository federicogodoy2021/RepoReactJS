import { useCartContext } from '../../context/CartContext'
import { Badge, ListGroup, Button } from 'react-bootstrap'
import EmptyCartButton from './EmptyCartButton';
import LegendsInCart from './LegendsInCart';

function Cart() {

  const {cartList,removeItems} = useCartContext()



  return (

    <div>
      {cartList.map(prod => 
      <div>
        <ListGroup className="warning" key= {prod.id} as="ol" >
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h1>{prod.title}</h1>
              </div>
              <h3>Precio:{`$${(prod.price * prod.cantidad)}.-`}</h3>
            </div>
            <Badge bg="primary" pill>
              <h2>Unidades: {prod.cantidad}</h2><Button onClick={()=>removeItems(prod.id)}>X</Button>
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </div>)}
      <div>
        <LegendsInCart/>
      </div>

      <EmptyCartButton/>
    </div>
)
}

export default Cart
