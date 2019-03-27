import React from 'react';

const Section = (props) => {
  const sectionStyles = {
    display: 'grid',
    gridTemplateColumns: '45% 1fr',
    gridGap: '25px',
    backgroundColor: props.backgroundColor,
    color: '#113F00',
    alignItems: 'center',
    justifyItems: 'center',
  }
  return(
    <section style={sectionStyles}>
      {props.textFirst && <div>{props.text}</div>}
      <div>
        <img 
          src='https://res.cloudinary.com/markdudevad/image/upload/v1553527742/grove_logo_enlarged_nophonenum_wefkrv.jpg'
          height='450px'
          width='700px'
          alt='Sample Image'
        />
      </div>
      {!props.textFirst && <div>{props.text}</div>}
    </section>
  )
}


export default Section