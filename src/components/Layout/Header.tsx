import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderContainer = styled.div((props) => ({
  width: '100%',
  height: '48px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
}));

const NavLink = styled.div((props) => ({
  padding: '5px',
  borderRadius: '8px',
  ':hover': {
    backgroundColor: '#e1e6e5',
  },
}));

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink>
        <Link href="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link href="/anime/collections">Collections</Link>
      </NavLink>
    </HeaderContainer>
  );
};

export default Header;
