import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  padding: 6px 14px;
  border-radius: 4px;
  margin-bottom: 12px;
  background-color: #d4d9dd;
  text-decoration: none;
  color: #000000;
  transition: all 250ms ease;

  :hover {
    background-color: #d2e9ab;
  }
`;
