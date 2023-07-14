import styled from '@emotion/styled';

type TButtonProps = {
  colorType: 'primary' | 'danger';
  width?: string;
  margin?: string;
};

const colorSchemes: {
  [key: string]: {
    backgroundColor: string;
    hoverColor: string;
    textColor: string;
  };
} = {
  primary: {
    backgroundColor: '#2b2d42',
    hoverColor: '#394168',
    textColor: '#FFFFFF',
  },
  danger: {
    backgroundColor: '#FF4136',
    hoverColor: '#E71D1D',
    textColor: '#FFFFFF',
  },
};

const Button = styled.button((props: TButtonProps) => ({
  width: props.width,
  margin: props.margin,
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '8px',
  cursor: 'pointer',
  backgroundColor: colorSchemes[props.colorType].backgroundColor,
  color: colorSchemes[props.colorType].textColor,
  border: 'none',
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: colorSchemes[props.colorType].hoverColor,
  },

  '&:disabled': {
    backgroundColor: 'gray',
    cursor: 'not-allowed',
  },
}));

export default Button;
