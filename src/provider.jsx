import { CartContext } from "./context"
import { useState, useEffect } from "react"

export function CartProvider({children}){
    const [cart, setCart] = useState([])
    const [comprado, setComprado] = useState(false)

    const [loading, setLoading] = useState(true); 
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => {setProducts(json)})
        .finally(() => setLoading(false));

    },[])

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

    const handleQuantity = (index, funcion) => {
        setCart((prevCart) => 
            prevCart.map((item,i) => {
                if(i == index){
                    
                    let nuevo = funcion == "+" ? item.quantity+1 : item.quantity-1 ;
                    return{
                        ...item, quantity: Math.max(1,nuevo),
                    }
                }
                return item;
                
            })
        )
    }
    
    const handleEliminar = (id) =>{
        let nuevo = cart.filter(item => item.id != id)
        
        setCart(nuevo)
    }

    const handleCheckout = () => {
        setCart([])
        setComprado(true)
        setTimeout(() => {setComprado(false)}, 5000) 
    }



    return(
        <CartContext.Provider value={{cart, handleAñadir, handleQuantity, handleEliminar, handleCheckout, comprado, setComprado, loading, products}}>
            {children}
        </CartContext.Provider>
    )
}