import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';
import Button from 'components/Button';
import messages from './messages';
import { LandingWrapper, Title } from './LandingPage';

class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LandingWrapper>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <Button action={this.props.play} label={messages.play}></Button>
      </LandingWrapper>
    );
  }
}

LandingPage.propTypes = {
  play: PropTypes.func,
};

export const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(push('/play')),
});

export default connect(null, mapDispatchToProps)(LandingPage);

