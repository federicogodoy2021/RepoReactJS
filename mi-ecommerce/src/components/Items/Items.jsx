import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

function Items({producto}) {

  return (
    <div>
      <CardGroup>
        <Card style={{backgroundColor: 'darkgray', display:'flex', alignItems: 'center'}}>
          <Card.Img style={{width:300, height:300}} variant="top" src={producto.foto}/>
          <Card.Footer>
            <Link to={`/detalle/${producto.id}`} style={{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
              <div>
                <div>{`${producto.title}`}</div>
                <div>{`${producto.description}`}</div>
                <div>{`${producto.price}`}</div>
              </div>
              <br/>
              <div>
                <Button variant="success" > Detalle del producto</Button>
              </div>
              <br/>
            </Link>
            <div style= {{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
              <ItemCount stock={producto.stock} initial={1}/>
              <br/>
            </div>
          </Card.Footer>
        </Card>
      </CardGroup> 
    </div>
  )
}

export default Items