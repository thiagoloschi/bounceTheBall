import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
import {
  Wrapper, Input,
} from './TextInput';

export const TextInput = (props) => (
  <Wrapper>
    <Input
      type={'text'}
      placeholder={props.intl.formatMessage(props.placeholder)}
      onChange={props.action}
      value={props.value}
    />
  </Wrapper>
);

TextInput.propTypes = {
  intl: intlShape.isRequired,
  action: PropTypes.func,
  placeholder: PropTypes.object.isRequired,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  value: '',
};

export default injectIntl(TextInput);
