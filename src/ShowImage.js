import React from 'react'

const ShowImage = props => {
  return (
    <div className="image-container">
      <img className="image" src={props.image} />
    </div>
  )
}

export default ShowImage
