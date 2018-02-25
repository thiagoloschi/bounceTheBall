import React from 'react';
import './Ball.min.css';

export const Ball = () => (
  <div className={'ball'}>
    <div className={'ball__stripe--right-rounded'} />
    <div className={'ball__stripe'} />
    <div className={'ball__stripe--vertical'} />
    <div className={'ball__stripe--left-rounded'} />
  </div>
);

export default Ball;
