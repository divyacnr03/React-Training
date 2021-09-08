import React from 'react';

import { Button } from '../BootstrapLayer/BootstrapLayer';

const ButtonWrap = ({ text, onClick }) => {
  return <Button type="submit" variant="primary">{text}</Button>
}

export default ButtonWrap;