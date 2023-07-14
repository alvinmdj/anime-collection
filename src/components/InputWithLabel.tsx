import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

const InputContainer = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  paddingInline: '10px',
}));

const InputLabel = styled.label((props) => ({
  fontSize: '14px',
}));

const InputField = styled.input((props) => ({
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  border: '1px solid #dddddd',
  borderRadius: '8px',
}));

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputWithLabel = ({ label, ...rest }: InputWithLabelProps) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputField {...rest} />
    </InputContainer>
  );
};

export default InputWithLabel;
