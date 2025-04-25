import { useContext } from "react"
import { CartContext } from "../context"
export default function Cart(){
    const {cart, handleQuantity, handleEliminar, handleCheckout, comprado} = useContext(CartContext)
    let total = 0
    cart.forEach(item => {
        total = total + (item.price * item.quantity)
    });
    total = total.toFixed(2);
    return(
        <div id="cart" className=" flex-1 w-full flex flex-col  items-center overflow-y-auto p-12">
            <p className=" bg-gray-600 text-center text-white font-bold w-[100dvw] p-5 lg:w-[60dvw]">Has comprado:</p>
            <div className="w-[100dvw] lg:w-[60dvw] flex-1 overflow-y-auto">
                
            {
            cart.length > 0 ? (
                    cart.map((item, index) => {
                        return(
                            <div key={index}  className="border-b-1 border-gray-400 flex flex-col lg:flex-row lg:h-20 gap-5 p-5 items-center lg:p-20">   
                                <img src={item.image} alt="" className="h-20 w-20"/>
                                <div className="flex flex-col justify-center">
                                    
                                    <p>{item.title}</p>
                                    <p>{item.price}€ * {item.quantity} = {item.price * item.quantity} €</p>
                                </div>
                                <div className="flex items-center gap-5">
                                    
                                    <button onClick={() => handleQuantity(index,"-")}>-</button>
                                    <p className="font-bold"> {item.quantity}</p>
                                    <button onClick={() => handleQuantity(index,"+")}>+</button>
                                </div>
                                <button onClick={() => handleEliminar(item.id)}>Delete</button>
                            </div>
                        )
                    })
                ) : comprado ? ( 
                    <p className="text-4xl opacity-[0.5]  w-full text-center my-[20vh]">Gracias por su compra!</p>
                ) : (
                    <p className="text-4xl opacity-[0.5] w-full text-center mt-[20vh] mb-[20vh]">Vaya! No hay nada</p>
                )
              
            }

            
            </div>
            <div className=" w-[100dvw] lg:w-[60dvw] h-30 bg-[#E4EFE7] flex items-center p-10 gap-10 font-bold"> 
                Checkout Total : {total} €
                <button onClick={handleCheckout}>Pagar ahora</button>
            </div>
        </div>
    )
}