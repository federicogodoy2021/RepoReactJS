import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider ({children}) {

  
const [cartList, setCartList] = useState([])

const addToCart = (item) =>{

  const sameProduct = cartList.find((sameId) => sameId.id === item.id)

  if(sameProduct){
    sameProduct.cantidad += item.cantidad
    setCartList([...cartList])
}else{
  
  setCartList([...cartList, item])
}
}

const emptyCart = () =>{
    setCartList([])
}

const removeItems =(id)=>{
  const newCartlist = cartList.filter((itemToRemove) => itemToRemove.id !== id)
  setCartList(newCartlist)
}

const finalPrice =()=>{
return cartList.reduce((acum, prod) => acum + (prod.price * prod.cantidad), 0)
}
const finalQty =()=>{
  return cartList.reduce((acum, prod) => acum += prod.cantidad, 0);

  }
  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        emptyCart,
        removeItems,
        finalPrice,
        finalQty
        }}>
      { children }

    </CartContext.Provider>
  )
}
