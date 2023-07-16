import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spinnerAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div((props) => ({
  margin: '12px',
  width: '50px',
  height: '50px',
  border: '6px solid rgba(0, 0, 0, 0.1)',
  borderLeftColor: '#2b2d42',
  borderRadius: '50%',
  animation: `${spinnerAnimation} 1s linear infinite`,
}));

const Wrapper = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const LoadingSpinner = () => (
  <Wrapper data-testid="loading-spinner">
    <Spinner />
  </Wrapper>
);

export default LoadingSpinner;
