import React,{createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
        {
            nombre: 'monitor curvo samsung 24"',
            precio: 90000,
            id:1,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
        {
            nombre: 'monitor curvo samsung 27"',
            precio: 120000,
            id:2,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
        {
            nombre: 'monitor curvo samsung 29"',
            precio: 140000,
            id:3,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
    ]


    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const [cart, setCart] = useState([])

    const addProductCart = (id) =>{
        setCart([...cart, getProductById(id)])
    }
  return (
    <Context.Provider value={{ products, getProductById, cart, addProductCart}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider