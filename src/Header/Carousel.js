import React, { Component } from 'react';
import { Icon } from "@blueprintjs/core";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const imgUrls = [
	"https://res.cloudinary.com/markdudevad/image/upload/v1553527742/grove_logo_enlarged_nophonenum_wefkrv.jpg", 
	"https://res.cloudinary.com/markdudevad/image/upload/v1553606229/20190313_073542_nkhyuk.jpg",
	"https://res.cloudinary.com/markdudevad/image/upload/v1553606286/20190325_072553_mclrjv.jpg",
	"https://res.cloudinary.com/markdudevad/image/upload/v1553606535/grove_panoramic_cropped_n1fxca.png",
	"https://res.cloudinary.com/markdudevad/image/upload/v1553606343/20190325_072707_xa19xk.jpg"
]

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval( () => this.nextSlide(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const {currentImageIndex} = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		})
    clearInterval(this.interval)
    this.interval = setInterval( () => this.nextSlide(), 10000);
	}
  nextSlide() {
    const lastIndex = imgUrls.length - 1
    const {currentImageIndex} = this.state
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    this.setState({
      currentImageIndex: index
    })
    clearInterval(this.interval)
    this.interval = setInterval( () => this.nextSlide(), 10000);
  }

  render() {
    const carouselStyles = {
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '1fr 1140px 1fr',
    }
    return(
      <div style={carouselStyles}>

        <div style={{textAlign: 'right'}}>
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
          />
        </div>
        
        <div style={{position: 'relative', width: 1140, height: 709}}>
          <ReactCSSTransitionGroup
            transitionName="slideshow"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={400}
          >
            <ImageSlide key={ imgUrls[this.state.currentImageIndex] } url={ imgUrls[this.state.currentImageIndex] } /> 
          </ReactCSSTransitionGroup>
        </div>

        <div>
          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
          />
        </div>
        
      </div>
    )
  }
}

const ImageSlide = ({url}) => {
  const slideStyles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    width: 1140,
    height: 709,
    boxShadow: 'inset 0 0 50px 20px #113F00',
  }
  return(
    <div style={slideStyles} />
  )
}

class Arrow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrowSize: 60,
      background: '#113F00',
    }
  }

  render() {
    return(
      <div 
        onClick={this.props.clickFunction}
        style={{
          display: 'inline-block', 
          backgroundColor: this.state.background,
          borderRadius: '50%'
        }} 
      >
        <Icon
          onMouseOver={() => {this.setState({
            arrowSize: 80,
            background: 'rgb(10, 90, 0)'
          })}}
          onMouseOut={() => {this.setState({
            arrowSize: 60,
            background: '#113F00'
          })}}
          onMouseDown={() => {this.setState({arrowSize: 60})}}
          onMouseUp={() => {this.setState({arrowSize: 80})}}
          icon={this.props.direction === 'left' ? "chevron-left" : "chevron-right"}
          iconSize={this.state.arrowSize}
          color='#DFD6A7'
          margin='35px'
        />
      </div>
    )
  }
}


export default Carousel