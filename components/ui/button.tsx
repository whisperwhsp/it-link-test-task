import React from 'react';
import { Button, ButtonProps, Spinner } from 'react-bootstrap';

const ILButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props}>
      {props.disabled ? <Spinner /> : props.children}
    </Button>
  )
}

export default ILButton