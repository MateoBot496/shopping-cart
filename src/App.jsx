/*import { useState } from 'react';*/
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context'

function App() {  
  const {products, loading} = useContext(CartContext)
  const arr = [0, 1, 2, 3];
  return (

    <>
      <div id='home' className='mt-20 flex-1 w-full flex justify-center flex-col items-center gap-15'>
          <h1 className='text-4xl font-bold text-center'>Bienvenido a Shopapp!</h1>
          <h2 className='text-center'>Discover our wide range of quality products, carefully selected to meet your everyday needs. Convenient, reliable, and delivered straight to your door.</h2>
          <Link to="/shop">
            <button>Shop now!</button>
          </Link>
          <div className=''> 
            <h2 className="text-4xl font-bold text-center text-gray-800 tracking-wide mb-6">Ofertas del dia</h2>
            <div id='ofertasgrid' className='w-[80dvw] lg:w-[60dvw] grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 place-items-center '>
              
              

                {arr.map((i) => (
                  loading ? (<div  key={i} className="flex justify-center items-center "> 
                    <span className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"></span> 
                    </div>) : (
                      <div key={i} className='w-60 h-80  place-items-center text-center flex flex-col gap-10'>
                        <img src={products[i].image} alt="" className='h-50 w-40' />
                        <p>{products[i].title}</p>
                      </div>
                    )
                ))
                  }

            </div>          
          </div>
      </div>  
      
    </>
  )
}

export default App
