import { useContext } from 'react';
import { CartContext } from '../context';

export default function Shop(){
    const { handleAñadir, loading, products } = useContext(CartContext);
    

    return(
        <>
        <div id='shop' className='flex-1 overflow-y-auto w-full flex justify-center p-12'>
            {loading ? (<div className="flex justify-center items-center h-64"> 
                <span className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"></span> 
            </div>) : (
                <div id='shopgrid' className='w-[80vw] lg:w-[50vw] grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-2'> 
                {
                    products.map((product, index) =>{
                        return(
                            
                            <div key={index} className='p-2 rounded-sm bg-gray-200'>
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
            )
                
            }
            
            
        </div>
        </>
    )
}