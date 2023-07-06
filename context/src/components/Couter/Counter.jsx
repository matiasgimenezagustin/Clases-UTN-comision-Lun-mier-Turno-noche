import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart } = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        console.log('necesito ejecutarme con urgencia')
    }
    return (
        <>
            <div>
                <button onClick={() => setQuantity(quantity >1 ? quantity - 1 : quantity)} >-</button>
                <span>{quantity}</span>
                <button  onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
            </div>
            <button onClick={onClickAddProduct}>Confirmar</button>
        </>
    )
}

export default Counter