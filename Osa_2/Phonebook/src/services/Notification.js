import React from 'react'

const Notification = ({ message, errorNum }) => {
    if (message === null) {
      return null
    }

    console.log("virheviesti on :" ,errorNum)
    

if(errorNum === 0){
    return (
      <div className="goodError">
        {message}
      </div>
    )
  }


else{
    return (
        <div className="badError">
          {message}
        </div>

    )
}
}
export default Notification
