import React from 'react'
import './ColorCard.css'
const ColorCard = ({likes, hours, colors}) => {

  return (
    <div className='colorCardContainer'>
        <div className='colorCard'>
            {
                colors.map(
                    (color, index) =>(
                        <div style={{backgroundColor: '#'+color}} key={color + index}></div>
                    )
                )
            }
        </div>
        <div className='colorCardInfo'>
            <button>
                <i className="bi bi-heart"></i>
                {likes}
            </button>
            <span>{hours} hours</span>
        </div>
    </div>
  )
}

export default ColorCard