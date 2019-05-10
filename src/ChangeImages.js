import React from 'react'

import ShowImage from './ShowImage'

const ChangeImages = props => {
  return (
    props.images.map(image => <ShowImage image={image} />)
  )
}

export default ChangeImages
