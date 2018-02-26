import styled from 'styled-components';

const ballSize = 150;
const bounceSize = 200;

export const BallWrapper = styled.div`
  overflow: hidden;
  margin-top: ${bounceSize}px;
  border-radius: ${ballSize}px;
  background: linear-gradient(#FFA500, #E65100);
  height: ${ballSize}px;
  width: ${ballSize}px;
  box-shadow: 2px 2px 15px 0px #222;
  transition: all ease 0.2s;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(367deg); 
  
  &:active {
    height: ${ballSize + 5}px;
    width: ${ballSize - 5}px;
    box-shadow: 0px 0px 10px 0px #000;
    background: linear-gradient(#E65100, #FFA500);
    margin-top: ${2.2 * bounceSize}px;
    cursor: grabbing;
    transition: all ease 0.1s;
    transform: rotate(90deg); 
  }
`;

const StripeBase = styled.div`
  width: 100%;
  height: 2px;
  background-color: #000;
`;

export const Stripe = StripeBase.extend`
  position: absolute;
`;

export const StripeVertical = StripeBase.extend`
  width: 3px;
  height: 100%;
  margin: auto 35px;
`;

export const StripeLeftRounded = StripeBase.extend`
  width: 60px;
  height: 80%;
  border-left: 2px solid #000;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  background-color: transparent; 
`;

export const StripeRightRounded = StripeBase.extend`
  width: 60px;
  height: 80%;
  border-right: 2px solid #000;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
  background-color: transparent;  
`;
