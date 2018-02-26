import React from 'react';
import {
  BallWrapper,
  Stripe,
  StripeVertical,
  StripeRightRounded,
  StripeLeftRounded,
} from './Styles';

export const Ball = () => (
  <BallWrapper>
    <StripeRightRounded />
    <Stripe />
    <StripeVertical />
    <StripeLeftRounded />
  </BallWrapper>
);

export default Ball;
