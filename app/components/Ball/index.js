import React from 'react';
import {
  BallWrapper,
  Stripe,
  StripeVertical,
  StripeRightRounded,
  StripeLeftRounded,
} from './Ball';

export const Ball = () => (
  <BallWrapper>
    <StripeRightRounded />
    <Stripe />
    <StripeVertical />
    <StripeLeftRounded />
  </BallWrapper>
);

export default Ball;
