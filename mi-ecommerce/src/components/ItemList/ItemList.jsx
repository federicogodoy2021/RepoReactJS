import Items from '../Items/Items'

function ItemList ({productos}) {

  return (
    
    <>
      {productos.map((prod) =>  <Items key = {prod.id} producto = {prod}/>)}
    </>  

)}


export default ItemList
