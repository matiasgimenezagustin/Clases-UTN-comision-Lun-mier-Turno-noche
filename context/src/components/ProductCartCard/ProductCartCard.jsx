import React from 'react'

const ProductCartCard = ({producto}) => {
  return (
    <div >
        <h2>{producto.nombre}</h2>
        <h3>Precio: {producto.precio}</h3>
        <p>Descripcion: {producto.descripcion}</p>
        <p>Cantidad: {producto.quantity}</p>
        <hr />
    </div>
  )
}

export default ProductCartCard