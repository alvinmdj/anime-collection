import styled from '@emotion/styled';
import { SelectHTMLAttributes } from 'react';

const SelectContainer = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  paddingInline: '10px',
}));

const SelectLabel = styled.label((props) => ({
  fontSize: '14px',
}));

const Select = styled.select((props) => ({
  padding: '8px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  color: '#333',
  cursor: 'pointer',

  '&:hover': {
    backgroundcolor: '#f2f2f2',
  },
}));

interface SelectWithLabelProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const SelectWithLabel = ({
  children,
  label,
  ...rest
}: SelectWithLabelProps) => {
  return (
    <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <Select {...rest}>{children}</Select>
    </SelectContainer>
  );
};

export default SelectWithLabel;
