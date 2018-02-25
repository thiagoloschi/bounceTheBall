import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';
import messages from './messages';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
        <div role="presentation" onClick={this.props.play}>Play</div>
      </h1>
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

