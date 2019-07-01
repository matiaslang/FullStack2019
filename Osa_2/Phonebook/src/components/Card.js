import React from 'react'

const Card = ({ card }) => {
    return (
        <p>{card.name} {card.number}</p>
    )
}

export default Card