import React from 'react';
import Section from './Section'
import ContactForm from './ContactForm'

const Main = () => {
  const mainSectionStyles = {
    display: 'grid',
    gridAutoRows: 600,
    fontSize: 30,
    textAlign: 'justify',
  }
  return (
    <main>

      <div style={mainSectionStyles}>

        <Section 
          text='The Grove is an outdoor event venue in a beautiful SC pecan grove! We offer all sorts of events throughout the year - both public & private - including our annual U-Pick Pecan season every Saturday from October through January!' 
          textFirst={true}
          backgroundColor='#DFD6A7'
        />

        <Section
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus vitae ex id porta. Aenean quis tellus in eros vehicula fringilla. Donec et tincidunt est, at lobortis velit. Suspendisse dignissim a augue vel facilisis. Mauris feugiat purus in sodales molestie. Nullam blandit tincidunt augue, sed accumsan nunc cursus non. Nullam euismod ac erat vel imperdiet. Nulla ligula ipsum, venenatis ut aliquam eget, tincidunt eu turpis.'
          textFirst={false}
          backgroundColor='#EAEFBD'
        />

        <Section 
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus vitae ex id porta. Aenean quis tellus in eros vehicula fringilla. Donec et tincidunt est, at lobortis velit. Suspendisse dignissim a augue vel facilisis. Mauris feugiat purus in sodales molestie. Nullam blandit tincidunt augue, sed accumsan nunc cursus non. Nullam euismod ac erat vel imperdiet. Nulla ligula ipsum, venenatis ut aliquam eget, tincidunt eu turpis.'
          textFirst={true}
          backgroundColor='#C9E3AC'
        />

        <ContactForm />

      </div>

    </main>
  )
}

export default Main