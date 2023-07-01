import React, { useState } from 'react'
import './RegisterProducts.css'
import CardProduct from '../CardProduct/CardProduct'
const RegisterProducts = () => {
    const opciones = ['juegos', 'tecnologia', 'hogar', 'Electrodomesticos']
   
    const handleSubmitRegistedProduct =(evento) =>{
        evento.preventDefault()
        const {target} = evento
        const {nombre, categoria, precio, thumbnail, envios} = target
        const newProduct = {
            nombre: nombre.value, 
            precio: precio.value, 
            thumbnail: thumbnail.value, 
            envios: envios.checked,
            categoria: categoria.value,
            id: Math.random() + Math.random()
        }
        setProducts([...products, newProduct])
    }
    const [products, setProducts] = useState([])
    console.log(products)
    
  return (
    <div className='formularioProductoSection'>
        <h1>Registro de productos en React</h1>
        <form onSubmit={handleSubmitRegistedProduct}>
            <div>
                <label htmlFor="nombre">Ingrese el nombre de su producto:</label>
                <input type="text" placeholder='Carta especial 32' id='nombre' name='nombre' />
            </div>
            <div>
                <label htmlFor="categoria">Ingrese la categoria del producto:</label>
                <select name="categoria" id="categoria">
                    {opciones.map((opcion) =><option value={opcion} key={opcion}>{opcion}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor='precio'>Ingrese el costo del producto:</label>
                <input type="number" name="precio" id="precio" />
            </div>
           
            <div>
                <label htmlFor='thumbnail'>Ingrese la direccion de la imagen:</label>
                <input type='text' id='thumbnail' name='thumbnail'/>
            </div>
            <div>
                <label htmlFor='envios'>Acepta envios:</label>
                <input type="checkbox" name="envios" id="envios" />
            </div>
            <input type='submit' value='Registrar'/>    
        </form>

        {/* Aca iria el mapeo de productos */}
        {products.map(product => <CardProduct  key={product.id} {...product}/>)}
    </div>
  )
}

export default RegisterProducts