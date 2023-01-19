import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 30px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 12px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 4px 12px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;

  :hover {
    background-color: #a2df91;
  }
`;
