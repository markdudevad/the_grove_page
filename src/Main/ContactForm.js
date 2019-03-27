import React from 'react';
import { FormGroup, InputGroup, TextArea, Intent, Button } from '@blueprintjs/core';

const ContactForm = () => {
  const formStyles = {
    backgroundColor: '#90BE6D',
    display: 'grid',
    gridTemplateColumns: '50% 1fr 10%',
    gridGap: '25px',
    color: '#113F00',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return(
    <div id='contactForm' style={formStyles}>
      <div style={{textAlign: 'center',}}>
        Contact us for more information
      </div>
      <div>
        <FormGroup
          label="Name"
          labelFor="input-name"
          labelInfo="(required)"
        >
          <InputGroup id="input-name" placeholder="Name" />
        </FormGroup>
        <FormGroup
          label="Email"
          labelFor="input-email"
        >
          <InputGroup id="input-email" placeholder="Email Address" />
        </FormGroup>
        <FormGroup
          helperText="Questions, comments, concerns? Contact us here and we will get back to you"
          label="Message"
          labelFor="input-message"
        >
          <TextArea
            large={true}
            intent={Intent.PRIMARY}
            fill
          />
        </FormGroup>
        <Button 
          fill
          large 
          icon="envelope"
        >Submit</Button>
      </div>

    </div>
  )
  
}

export default ContactForm