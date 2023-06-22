import React from 'react'
import './app.css'
import { Background, Button, Input } from './components/'
import google from '../public/color-hunt-icon-chrome.png'

const App = () => {
  const saludar = () => {

    alert('hola ')
  }
  const despedida = () =>{
    alert('adios')
  }
  
  
  return (
    /* Fragments: <></> */
    <>
      <div className='titulo'>
        <Background>
          <h1 style={{color: 'white'}}>Hola desde React</h1>
          <h2 style={{color: 'red'}}>Hola </h2>
        </Background>
        

      </div>
      <>
        <Button accion={saludar} />
        <Button accion={despedida} type='btn-dark' />
        <Input/>
      </>
      
      <label htmlFor=""></label>


      {/* 
      Componentes:

      Un componente navbar que tenga los estilos de el navbar de: https://colorhunt.co/
      
      Un componente que se llame ColorCard que tenga el mismo estilo que una carta de color hunt
      ColorCard recibe 3 props: 
      1- un array con cuatro colores : array
      2- likes : number
      3- horas : number
      EJ: <ColorCard colors={['001C30', '176B87', '64CCC5', 'DAFFFB']} likes={259} horas={23}/>
      */}
      <img src={google} alt="" />
    </>
  )
}

export default App
