import React, {useState} from 'react'
import './app.css'
import { Background, Button, Input, ItemListContainer } from './components/'


const App = () => {
  /* HOOK */
  const [contador, setContador] = useState(2) /* Valor inicial de mi estado */
  const [mensaje, setMensaje] = useState('')
  const [password, setPassword]  = useState('')
  const incrementar = () =>{
    //Operador Cortocircuito && (IF simple)

    //operador ternario (IF...ELSE)
    setContador(contador < 10 ? contador + 1 : contador)
  }

  const decrementar= () =>{
    setContador(contador>0 ? contador-1 :contador)

  }
  const actualizarInput = (text) =>{
    setMensaje(text)
  }
  const palabrasProhebidas = ['1234', 'admin', '0000']
  const validarPassword = () => palabrasProhebidas.some((palabra) => palabra == password)
  return (
    
    <>
      <div className='contenedorContador'> 
        <button className='btn' onClick={() => decrementar()}>-</button>
        <span style={{fontSize: '24px'}}>{contador}</span>
        <button className='btn' onClick={incrementar}>+</button>
      </div>
      <div>
        <form >
        {/* Crear un input de contraseña, si el usuario escribe alguna de la sig palabras debera aprecer un error en pantalla como el siguiente
        
        
        */}
        
        
          <input placeholder='Escriba un mensaje' value={mensaje} onChange={(event) => actualizarInput(event.target.value)}/>
          {mensaje.length > 0 && <button>Enviar</button>}
        </form>






        <input type="password" value={password} placeholder='Escriba su contraseña' onChange={(e) =>setPassword(e.target.value)}/>
        {
        validarPassword() 
        &&
        <span style={{color: 'red', fontWeight: 500}}>Has utilizado una contraseña invalida</span>
        }
      </div>
      <ItemListContainer/>
    </>
  )
}

export default App
