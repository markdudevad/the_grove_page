import React from 'react';
import Carousel from './Carousel';

const Header = () => {
  const headerStyles = {
  }
  const introTitleStyles = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 100,
    marginBottom: 30,
    fontFamily: 'Stint Ultra Expanded'
  }
  return (
    <header style={headerStyles}>

      <Carousel />

      <div style={introTitleStyles}>
        Outdoor Event Venue
      </div>

    </header>
  )
}


export default Header