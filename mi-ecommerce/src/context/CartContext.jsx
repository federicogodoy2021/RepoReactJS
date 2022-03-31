import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {

const [cartList, setCartList] = useState([])

const addToCart = (item) =>{
    setCartList([...cartList, item])
}

const emptyCart = (item) =>{
    setCartList([])
}

  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        emptyCart
        }}>

        { children }

    </CartContext.Provider>
  )
}

export default CartContextProvider

