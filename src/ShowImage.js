import React from 'react'

const renderImage = image => {
  if (image) {
    return (
      <div className="image-container">
        <img className="image" src={image} />
      </div>
    )
  } else {
    return (
      <div>
        Loading pictures...
      </div>
    )
  }
}

const ShowImage = props => {
  console.log(props.image)
  return (
    renderImage(props.image)
  )
}

export default ShowImage
