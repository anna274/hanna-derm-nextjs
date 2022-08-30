import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border-color: #638a6b;
  background: #638a6b;
  color: #fff;
  outline: none;
  cursor: pointer;
`;

export const InlineButton = styled.button`
  color: #000;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    color: #638a6b;
  }
  font-size: 18px;
  border: none;
  background-color: transparent;
`;
