import { useContext } from "react"
import { CartContext } from "../context"
export default function Cart(){
    const {cart} = useContext(CartContext)
    return(
        <div id="cart" className="bg-yellow-100 h-full w-full flex flex-col  items-center">
            <p className="bg-gray-600 text-center text-white font-bold w-[100dvw] lg:w-[60dvw] ">Has comprado:</p>
            <div className="border-2 w-[100dvw] lg:w-[60dvw] bg-blue-100 h-full">
                
            {cart.length > 0 ? (
                cart.map((item, index) => {
                    return(
                        <div key={index}  className="flex h-20 gap-5">   
                            <img src={item.image} alt="" />
                            <div className="flex flex-col justify-center">
                                
                                <p>{item.title}</p>
                                <p>{item.price}€ * {item.quantity} = {item.price * item.quantity} €</p>
                            </div>
                            <div className="flex items-center gap-5">
                                
                                <button>-</button>
                                <p className="font-bold"> {item.quantity}</p>
                                <button>+</button>
                            </div>
                        </div>
                    )
                })
            ) : (
                <p className="text-4xl opacity-[0.5] text-center mt-20">Vaya! No hay nada</p>
            )
                
            }
            </div>
        </div>
    )
}