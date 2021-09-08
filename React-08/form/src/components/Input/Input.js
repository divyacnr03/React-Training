import React from 'react';

import { InputGroup, FormControl } from '../BootstrapLayer/BootstrapLayer';

const InputGroupWrap = ({ text, inputRef, focus }) => {
  return <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id={`inputGroup-sizing-${text.replace(' ', '').toLowerCase()}`}>{text}</InputGroup.Text>
    </InputGroup.Prepend>
    {
      <FormControl
        aria-label={text}
        aria-describedby={`inputGroup-sizing-${text.replace(' ', '').toLowerCase()}`}
        id={`inputGroup-${text.replace(' ', '').toLowerCase()}`}
        ref={inputRef}
        autoFocus={focus}
      />
    }
  </InputGroup>
}

export default InputGroupWrap;