import React,{createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
        {
            nombre: 'monitor curvo samsung 24"',
            precio: 90000,
            id:1,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
        {
            nombre: 'monitor curvo samsung 27"',
            precio: 120000,
            id:2,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
        {
            nombre: 'monitor curvo samsung 29"',
            precio: 140000,
            id:3,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
        {
            nombre: 'Celular Iphone',
            precio: 500000,
            id:4,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
    ]


    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const getProductCartById =(id) => {
        return cart.find(producto => producto.id === Number(id))
    }

    /* El estado del array de objetos del carrito */
    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(producto => producto.id === Number(id))
    
    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }
    return (
        <Context.Provider value={{ products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
            {children}
        </Context.Provider>
    )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider