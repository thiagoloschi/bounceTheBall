import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';
import messages from './messages';
import { LandingWrapper } from './Styles';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LandingWrapper>
        <FormattedMessage {...messages.header} />
        <div role="presentation" onClick={this.props.play}>Play</div>
      </LandingWrapper>
    );
  }
}

HomePage.propTypes = {
  play: PropTypes.func,
};

export const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(push('/play')),
});


export default connect(null, mapDispatchToProps)(HomePage);

