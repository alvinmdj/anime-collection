import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

const CheckboxContainer = styled.label((props) => ({
  display: 'inline-block',
  verticalAlign: 'middle',
}));

const CheckboxInput = styled.input((props) => ({
  position: 'absolute',
  opacity: 0,
}));

const CheckboxLabel = styled.span((props) => ({
  display: 'inline-block',
  position: 'relative',
  paddingLeft: '24px',
  cursor: 'pointer',
  fontSize: '14px',

  '&:before': {
    content: '""',
    display: 'inline-block',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '14px',
    height: '14px',
    border: '2px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
  },

  '&:after': {
    content: '""',
    display: 'none',
    position: 'absolute',
    left: '4px',
    top: '4px',
    width: '8px',
    height: '8px',
    borderRadius: '2px',
    backgroundColor: '#333',
  },

  'input:checked + &:after': {
    display: 'block',
  },
}));

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = ({ children, ...rest }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" {...rest} />
      <CheckboxLabel>{children}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
