import { Link } from "react-router-dom"
import { CartContext } from "../context"
import { useContext } from "react"

export default function Header(){
    const {cart} = useContext(CartContext)
    let numItems = 0;
    cart.forEach((item) => 
        numItems = numItems + item.quantity
    );
    return(
        <div id="header" className="w-full flex justify-center items-center h-30 
             backdrop-blur-md 
             bg-gradient-to-b from-black/40 to-white/10 
            border-white/20 sticky top-0 z-50">
            <ul className="flex gap-2 items-center w-full lg:w-[60dvw]">
                <li className="mr-auto"><img src="https://darkwool.github.io/shopping-cart/assets/logo-e84295bf.svg" alt="" className="h-15"/></li>
                <li><Link to="/">HOME</Link> </li>
                <li><Link to="/shop">SHOP</Link> </li>
                <li><Link to="/cart">CART ({numItems})</Link> </li>
            </ul>
        </div>
    )
}