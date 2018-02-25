import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #333;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  cursor: grab;
  cursor: -webkit-grab;

  > * {
     height: fit-content;
     border-radius: 100%;
  }
`;

export const Text = styled.div`
  color: #FFA500;
  font-size: 32px;
  font-family: 'Cabin Sketch', cursive;
  text-shadow: 2px 4px 4px #000;
  margin: 32px 0;
  position: absolute;
  transition: font-size ease 2s;
`;
