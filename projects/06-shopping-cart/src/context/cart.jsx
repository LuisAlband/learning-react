import { createContext, useReducer, useState } from "react"; 
import { cartReducer, cartInitialState } from "../reducers/cart";

//1. Creamos el Contexto
export const CartContext = createContext()


//2. Crear el Provider, para proveer el contexto
export function CartProvider ({ children }) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        playload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        playload: product
    })

    const clearCart = product => dispatch({ type: 'CLEAR_CART' })
 
    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>{ children }</CartContext.Provider>

    )
}