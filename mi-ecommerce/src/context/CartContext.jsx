import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export function CartContextProvider ({children}) {

const [cartList, setCartList] = useState([{}])

const addToCart = (item) =>{
  setCartList([...cartList, item])
}

const emptyCart = () =>{
    setCartList([])
}



/* const countSameProduct = (item) =>{

    const sameProduct = cartList.find((item) => item.id === cartList.id)

    if(sameProduct){
        setCartList([...cartList, item.cantidad += item.cantidad])
    }else{
        setCartList([...cartList, item])
    }
console.log(item)
}*/


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
