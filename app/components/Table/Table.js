import styled from 'styled-components';

const fieldWidth = 150;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: solid 1px #FFA500;
  height: fit-content;
  color: #FFA500;
  font-family: 'Cabin Sketch', cursive;
  box-shadow: 2px 4px 4px #000;
  max-width: ${(props) => props.keys * fieldWidth}px;
  max-height: 338px;
  overflow: hidden;
`;

export const Content = styled.div`
  max-height: 338px;
  width: 100%;
  overflow-x: hidden;
  overflox-y: auto;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Field = styled.div`
  padding: 16px;
  width: ${fieldWidth}px;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #FFA500;
  color: #000;
`;
