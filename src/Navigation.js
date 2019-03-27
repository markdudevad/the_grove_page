import React from 'react'
import { Button, Navbar, NavbarGroup, NavbarDivider, Popover } from "@blueprintjs/core";

const Navigation = () => {
  const navbarStyles = {
    backgroundColor: "#DFD6A7",
  }
  const buttonStyles = {
    backgroundColor: "#DFD6A7",
    width: '200px',
  }
  const navbarDividerStyles = {
    marginLeft: '20px',
    marginRight: '20px',
  }
  return(

    <Navbar style={navbarStyles}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <NavbarGroup>
          <Button large icon="home" text="Home" style={buttonStyles} /> 
          <NavbarDivider style={navbarDividerStyles}/>
          <Button large icon="timeline-events" text="Events" style={buttonStyles} />
          <NavbarDivider style={navbarDividerStyles}/>
          <Popover content={<PopoverContent text="Learn all about us!" />}>
            <Button large icon="info-sign" text="About" style={buttonStyles} />
          </Popover>
          <NavbarDivider style={navbarDividerStyles}/>
          <a href='#contactForm'>
            <Button large icon="people" text="Contact Us" style={buttonStyles} />
          </a>
        </NavbarGroup>
      </div>
    </Navbar>

  )
}

const PopoverContent = (props) => {
  const popoverStyles = {
    color: 'black',
    margin: '5px',
    fontSize: '20px',
  }
  return (
    <div style={popoverStyles}>
      {props.text}
    </div>
  )
}

export default Navigation