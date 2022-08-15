import styled from 'styled-components';

export const Container = styled.main`
  font-family: 'Open Sans', sans-serif;
`;

export const Navigation = styled.nav`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 10px;
`

export const NavigationLink = styled.a`
  color: #000;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    color: #638a6b;
  }
  font-size: 18px;
`