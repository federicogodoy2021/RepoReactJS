import React from 'react'
import { Button, Card, CardGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Items({producto}) {

  return (
    <div>
      <CardGroup>
        <Card style={{backgroundColor: 'darkgray', display:'flex', alignItems: 'center'}}>
          <Card.Img style={{width:300, height:300}} variant="top" src={producto.foto}/>
          <Card.Footer>
            <Link to={`/detalle/${producto.id}`} style={{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
              <div>
                <div><h2>{`${producto.title}`}</h2></div>
                <div><h3>{`${producto.description}`}</h3></div>
                <div><h2>{`$${producto.price}`}</h2></div>
              </div>
              <br/>
              <div>
                <Button variant="success" > Detalle del producto</Button>
              </div>
              <br/>
            </Link>
            <div style= {{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
            <br/>
            </div>
          </Card.Footer>
        </Card>
      </CardGroup> 
    </div>
    
  )
}

export default Items