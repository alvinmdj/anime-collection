import styled from '@emotion/styled';
import { ReactNode } from 'react';

type TErrorMessageProps = {
  children: ReactNode;
};

const ErrorMessageText = styled.p((props) => ({
  color: '#ff0000',
  fontSize: '14px',
  marginTop: '8px',
}));

const ErrorMessage = ({ children }: TErrorMessageProps) => {
  return <ErrorMessageText>{children}</ErrorMessageText>;
};

export default ErrorMessage;
