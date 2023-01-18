import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 24px;
  background-color: #d4d9dd;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(176, 173, 176, 1);
  -moz-box-shadow: 0px 5px 5px 0px rgba(176, 173, 176, 1);
  box-shadow: 0px 5px 5px 0px rgba(176, 173, 176, 1);

  > nav {
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &.active {
    color: tomato;
  }
`;
