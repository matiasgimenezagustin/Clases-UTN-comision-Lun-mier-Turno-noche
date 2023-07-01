import React from 'react'

const CardProduct = ({nombre, precio, envios, thumbnail, categoria}) => {
  return (
    <div>
        <h2>Producto: {nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <div>Acepta envios: {envios ? "SI" : 'NO'}</div>
        <div>
            <img src={thumbnail} width='200px' alt={nombre} />
        </div>
        <div><b>Categoria:</b> {categoria}</div>
    </div>
  )
}

export default CardProduct
