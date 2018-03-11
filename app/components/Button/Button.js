import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: 8px 64px;
  border: solid 1px #FFA500;
  font-family: 'Cabin Sketch', cursive;
  box-shadow: 2px 4px 4px #000;
  width: fit-content;
  color: #000;
  background-color: #FFA500;
  cursor: pointer;
  border: 2px solid #FFA500;

  &:disabled {
    opacity: 0.7;
    color: #bbb;
    background-color: #999;
    border: 2px solid #999;
    cursor: no-drop;
  }
`;
