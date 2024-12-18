import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";
import { useId } from "react";
import './Cart.css'
import { useCart } from "../hooks/useCart";


function CartItem({price, title, quantity,addToCart}){
    return(
        <li>
            <img
                src="https://fotosuraj.com/26640-large_default/samsung-tablet-galaxy-tab-s8-ultra-8gb-128gb.jpg"
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}


export function Cart () {

    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart} = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem key={product.id}
                        addToCart={() => addToCart(product)}
                        {...product} />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}