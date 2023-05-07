import styled from 'styled-components';

export const Header = styled.header`
  padding: 30px;

  background-color: #471ca9;
`;

export const Main = styled.main`
  padding: 30px;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 50px;

    text-transform: uppercase;
    font-size: 30px;
    font-weight: 500;
    color: #ebd8ff;

    a {
      transition: color 250ms ease-in-out;

      &:hover,
      &:focus,
      &.active {
        color: #5cd3a8;
      }
    }
  }
`;
