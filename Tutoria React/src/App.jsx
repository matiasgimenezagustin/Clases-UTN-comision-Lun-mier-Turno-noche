import React from 'react'

import Navbar from './components/Navbar/Navbar'
import { ColorCard } from './components'

const App = () => {
  const cartasColores = [
    {
      likes: 60,
      hours: 3,
      colors: ['001C30', '176B87', '64CCC5', 'DAFFFB'],
      id: 1
    },
    {
      likes: 40,
      hours: 1,
      colors: ['331B30', '296B37', '04C3C5', 'DAFBFB'],
      id: 2
    },
    {
      likes: 600,
      hours: 22,
      colors: ['334F30', '796A37', '24C9C5', 'DA4BFB'],
      id: 3
    },
    {
      likes: 630,
      hours: 22,
      colors: ['334F30', '796A37', '24C9C5', 'DA4BFB'],
      id: 4
    },
    {
      likes: 580,
      hours: 21,
      colors: ['534F40', '296B37', '54B9F5', 'FA4BFB'],
      id: 5
    },
  ]
  return (
    <>
      <div className='colorCardsContainer'>
        {
          cartasColores.map(carta =>(
              <ColorCard {...carta} key={carta.id}/>
            )
          )
        } 
      </div>
     
    </>
  )
}

export default App
