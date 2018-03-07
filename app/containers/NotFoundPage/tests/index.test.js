import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import { push } from 'react-router-redux';
import Button from 'components/Button';
import { NotFoundPage, mapDispatchToProps } from '../index';
import { Wrapper, Title, Message, ButtonWrapper } from '../NotFoundPage';
import messages from '../messages';

describe('<NotFoundPage />', () => {
  const mockedProps = {
    goBack: jest.fn(),
  };
  const renderedComponent = shallow(<NotFoundPage {...mockedProps} />);
  it('should render all the elements correctly', () => {
    expect(renderedComponent.containsMatchingElement(
      <Wrapper>
        <div>
          <Title>
            <FormattedMessage {...messages.title} />
          </Title>
          <Message>
            <FormattedMessage {...messages.description} />
          </Message>
          <ButtonWrapper>
            <Button
              action={mockedProps.goBack}
              label={messages.label}
            ></Button>
          </ButtonWrapper>
        </div>
      </Wrapper>
    )).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const dispatchProps = mapDispatchToProps(dispatch);
    it('should have the functions defined', () => {
      expect(dispatchProps.goBack).toBeDefined();
    });

    it('should call dispatch with push to the correct route ', () => {
      dispatchProps.goBack();
      expect(dispatch).toHaveBeenCalledWith(push('/'));
    });
  });
});
