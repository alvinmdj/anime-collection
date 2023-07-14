import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderContainer = styled.div((props) => ({
  backgroundColor: '#2b2d42',
  width: '100%',
  padding: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
}));

const NavLink = styled.div((props) => ({
  color: 'white',
  padding: '8px 12px',
  borderRadius: '8px',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#454a66',
  },
}));

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/anime/collections">
        <NavLink>Collections</NavLink>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
