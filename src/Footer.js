import React from 'react';

const Footer = () => {
  const footerStyles = {
    display: 'grid',
    gridTemplateColumns: '35% 1fr 1fr',
    gridGap: '25px',
    height: 600,
    alignItems: 'center',
    justifyItems: 'center',
    fontSize: 50,
  }
  return (
    <footer style={footerStyles}>

      <div>
        <img 
          src='https://res.cloudinary.com/markdudevad/image/upload/v1553527742/grove_logo_enlarged_nophonenum_wefkrv.jpg'
          height='450px'
          width='700px'
          alt='Sample Image'
        />
      </div>
      <div>
        More information about The Grove
      </div>
      <div>
        <img 
          src='https://bcarsonclemson.files.wordpress.com/2010/08/cscgrown-bug-fade-rgb.jpg'
          height='375px'
          width='415px'
          alt='Sample Image'
        />
      </div>

      <div />
      <div style={{fontSize: 15}}>
        Website designed by Mark Vadasz
      </div>
      
    </footer>
  )
}


export default Footer