import React from 'react'

const Country = ({name, id, capital, population, languages, flag, mtod}) => {
    return(
    <div>{name}
    <button key={id} value={name} onClick={event => mtod(event.target.value)}>show</button>
    </div>
    )
}
//<p key={id}>{name}</p><button>tekstiä</button>



export default Country