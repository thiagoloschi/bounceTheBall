import React from 'react';
import { shallow } from 'enzyme';
import { Ball } from '../index';
import {
  BallWrapper,
  Stripe,
  StripeVertical,
  StripeRightRounded,
  StripeLeftRounded,
} from '../Ball';

const renderShallow = (componentProps) => shallow(<Ball {...componentProps} />);

beforeAll(() => {
  renderedComponent = renderShallow();
});

let renderedComponent;

describe('<Ball />', () => {
  it('should render correctly', () => {
    expect(renderedComponent.containsMatchingElement(
      <BallWrapper>
        <StripeRightRounded />
        <Stripe />
        <StripeVertical />
        <StripeLeftRounded />
      </BallWrapper>
    )).toBeTruthy();
  });
});
