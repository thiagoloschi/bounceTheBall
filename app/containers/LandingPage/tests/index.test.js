import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import { push } from 'react-router-redux';
import Button from 'components/Button';
import { Title } from '../LandingPage';
import { LandingPage, mapDispatchToProps } from '../index';
import messages from '../messages';

const renderShallow = (componentProps) => shallow(<LandingPage {...componentProps} />);
let renderedComponent;

const mockedProps = {
  play: jest.fn(),
};

beforeAll(() => {
  renderedComponent = renderShallow(mockedProps);
});

describe('<LandingPage />', () => {
  it('should render a button', () => {
    expect(renderedComponent.contains(
      <Button action={mockedProps.play} label={messages.play}></Button>
    )).toBeTruthy();
  });

  it('should render the correct page message', () => {
    expect(renderedComponent.containsMatchingElement(
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
    )).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const actions = mapDispatchToProps(dispatch);

    it('should already have the funcion play defined', () => {
      expect(actions.play).toBeDefined();
    });

    it('should call dispatch with push to the correct route ', () => {
      actions.play();
      expect(dispatch).toHaveBeenCalledWith(push('/play'));
    });
  });
});
