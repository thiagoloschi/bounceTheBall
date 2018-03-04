import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex-column;
  flex-flow: column wrap;
  border: solid 1px #FFA500;
  height: fit-content;
  color: #FFA500;
  font-family: 'Cabin Sketch', cursive;
  box-shadow: 2px 4px 4px #000;
  max-width: fit-content;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Field = styled.div`
  padding: 16px;
  min-width: 150px;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #FFA500;
  color: #000;
`;
