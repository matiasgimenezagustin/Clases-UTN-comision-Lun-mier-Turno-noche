import React from 'react'
import Button from '../Button/Button'

const Background = ({children}) => {
    return (
        <div style={{backgroundColor: 'black', padding: '10px'}}>
            {children}
            <Button/>
        </div>
    )
}

export default Background