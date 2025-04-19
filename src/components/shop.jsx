import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context';

export default function Shop(){
    const { handleAñadir } = useContext(CartContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => {setProducts(json)});
    },[])

    return(
        <>
        <div id='shop' className='flex-1 overflow-y-auto w-full border-2 flex justify-center'>
            <div id='shopgrid' className='w-[40vw] grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-2'> 
            {
                products.map((product, index) =>{
                    return(
                        
                        <div key={index} className=' border-2 p-2'>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-48 object-contain mb-2 bg-white rounded"
                            />
                            
                            <p>{product.price}€</p>
                            <p className='line-clamp-2 h-12 font-bold'> {product.title} </p>
                            
                            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-[1.1] transition duration-300 ease-in-out cursor-pointer" onClick={() => handleAñadir(product)}>
                            Añadir al carrito
                            </button>
                            
                        </div>
                    )
                })
            }
            </div>  
            
        </div>
        </>
    )
}