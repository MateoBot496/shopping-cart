import { CartContext } from "./context"
import { useState } from "react"

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const handleAñadir = (nuevo) =>{
        if(cart.find((item) => item.id == nuevo.id)){
            
            setCart((prevCart) => 
                prevCart.map((item) => 
                    item.id == nuevo.id 
                    ? {...item, quantity: item.quantity + 1} : item));
        }else{
            setCart((prevCart) => [...prevCart, {...nuevo, quantity: 1}]);
        }
    }

    return(
        <CartContext.Provider value={{cart, handleAñadir}}>
            {children}
        </CartContext.Provider>
    )
}