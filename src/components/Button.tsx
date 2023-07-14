import styled from '@emotion/styled';

type TButtonProps = {
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
};

const Button = styled.button((props: TButtonProps) => ({
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '8px',
  cursor: 'pointer',
  backgroundColor: props.bgColor || '#2b2d42',
  color: props.textColor || 'white',
  border: 'none',
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: props.hoverColor || '#394168',
  },

  '&:disabled': {
    backgroundColor: 'gray',
    cursor: 'not-allowed',
  },
}));

export default Button;
