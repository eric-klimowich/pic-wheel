import React, { Component, Fragment } from 'react'

import ShowImage from './ShowImage'

class ImagesContainer extends Component {

  state = {
    images: this.props.images,
    imageIndex: 0,
    imageToDisplay: ''
  }

  componentDidMount() {
    this.changeImage()
  }

  changeImage = () => {
    setTimeout(function() {
      let imageToDisplay = this.state.images[this.state.imageIndex]
      if (this.state.imageIndex + 1 < this.state.images.length) {
        this.setState({ imageIndex: this.state.imageIndex + 1}, () => this.changeImage())
      } else {
        this.setState({ imageIndex: 0 }, () => this.changeImage())
      }
      this.setState({ imageToDisplay })
      console.log(this.state.imageIndex)
    }.bind(this), 3000)
    return this.state.imageToDisplay
  }

  render() {
    console.log(this.state)
    return (
      <ShowImage image={this.state.imageToDisplay} />
    )
  }
}

export default ImagesContainer
