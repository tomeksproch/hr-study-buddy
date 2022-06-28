import React from 'react';
import { StyledButton } from './Button.styles';
import { ReactComponent as DeleteIcon } from 'assets/Icons/delete-icon.svg';

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
