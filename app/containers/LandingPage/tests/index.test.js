import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import LandingPage from '../index';
import messages from '../messages';

describe('<LandingPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <LandingPage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
