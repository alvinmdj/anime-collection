import styled from '@emotion/styled';
import { ReactNode } from 'react';

const BadgeContainer = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 16px;
  background-color: #2b2d42;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`;

const Badge = ({ children }: { children: ReactNode }) => {
  return <BadgeContainer>{children}</BadgeContainer>;
};

export default Badge;
