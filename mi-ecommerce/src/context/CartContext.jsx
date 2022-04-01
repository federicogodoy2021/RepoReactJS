import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export function CartContextProvider ({children, initial}) {

const [cartList, setCartList] = useState([])

const addToCart = (item) =>{
/*   setCartList([...cartList, item])
 */
  const sameProduct = cartList.find((sameId) => sameId.id === item.id)

  if(sameProduct){
    sameProduct.cantidad += item.cantidad
    setCartList([...cartList]) 

}else{
    setCartList([...cartList, item])
}}
console.log(cartList)

const emptyCart = () =>{
    setCartList([])
}


  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        emptyCart,
        }}>

      { children }

    </CartContext.Provider>
  )
}
