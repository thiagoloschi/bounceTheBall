import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Wrapper,
} from './Button';

export const Button = (props) => (
  <Wrapper onClick={props.action}>
    <FormattedMessage {...props.label} />
  </Wrapper>
);

Button.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.isRequired,
};

export default Button;
