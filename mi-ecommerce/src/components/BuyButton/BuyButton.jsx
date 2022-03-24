import React from 'react'
import { Button } from 'react-bootstrap'
/* import count from '../ItemCount/ItemCount'
 */
function BuyButton() {
/*   console.log(count)
 */  return (
    <div>
        <Button variant="success" onClick = {()=>console.log(/* count */)}> Añadir al carrito</Button>
    </div>
  )
}

export default BuyButton