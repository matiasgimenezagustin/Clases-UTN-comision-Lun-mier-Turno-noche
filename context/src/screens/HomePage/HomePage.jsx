import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'

const HomePage = () => {
    const {products} = useCustomContext()
  return (
    <div>
        <h1>Lista de productos</h1>
        <div>
            {products.map(producto  => (
            <ProductCard producto={producto} key={producto.id}/>
            ))}
        </div>
    </div>
  )
}

export default HomePage