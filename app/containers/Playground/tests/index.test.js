import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import { Playground } from '../index';
import messages from '../messages';

describe('<Playground />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <Playground />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
