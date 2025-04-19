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
        <div id="header" className="w-full flex justify-center items-center h-20 bg-red-200">
            <ul className="flex gap-2">
                <li>Logo</li>
                <li><Link to="/">HOME</Link> </li>
                <li><Link to="/shop">SHOP</Link> </li>
                <li><Link to="/cart">CART ({numItems})</Link> </li>
            </ul>
        </div>
    )
}