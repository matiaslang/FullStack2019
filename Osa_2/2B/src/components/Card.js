import React from 'react'

const Card = ({ card }) => {
    console.log("kortti on" , card)
    return (
        <p>{card.name}</p>
    )
}

export default Card