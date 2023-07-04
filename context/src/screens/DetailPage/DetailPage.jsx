import React from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const DetailPage = () => {
    const {id} = useParams()
    const {getProductById, addProductCart} = useCustomContext()
    const productDetail = getProductById(id)
  return (
    <div>
        <h1>{productDetail.nombre}</h1>
        <h2>{productDetail.precio}</h2>
        <p>Descripcion: {productDetail.descripcion}</p>
        <div><button onClick={() => addProductCart(productDetail.id)}>Comprar</button></div>
    </div>
  )
}

export default DetailPage