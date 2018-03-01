import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { Button } from '../index';
import { Wrapper } from '../Button';


const renderShallow = (componentProps) => shallow(<Button {...componentProps} />);
let renderedComponent;

const mockProps = {
  action: jest.fn(),
  label: {
    id: 'someId',
    message: 'testing is cool',
  },
};


beforeAll(() => {
  renderedComponent = renderShallow(mockProps);
});

describe('<Button />', () => {
  it('should render a button and a label', () => {
    expect(renderedComponent.find(FormattedMessage)).toHaveLength(1);
  });

  it('should render the supplied label', () => {
    expect(renderedComponent.find(FormattedMessage).props().id).toEqual(mockProps.label.id);
    expect(renderedComponent.find(FormattedMessage).props().message).toEqual(mockProps.label.message);
  });

  it('should have an onClick handler equals to the supplied action', () => {
    expect(renderedComponent.find(Wrapper).props().onClick).toEqual(mockProps.action);
  });
});
