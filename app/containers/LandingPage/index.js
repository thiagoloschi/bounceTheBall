import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { makeSelectRanking, makeSelectIsAllSet, makeSelectUsername } from 'containers/Playground/selectors';
import { readyToPlay } from 'containers/Playground/actions';
import Button from 'components/Button';
import Table from 'components/Table';
import TextInput from 'components/TextInput';
import { LineWrapper } from 'commons/styledComponents/PageWrapper';

import messages from './messages';
import { LandingWrapper, Title } from './LandingPage';

export class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  onUsernameInput = (username) => {
    const value = username.target.value.trim();
    if (value.length > 3) {
      return this.props.enablePlay(value, false);
    }
    return this.props.enablePlay(value, true);
  }

  render() {
    return (
      <LandingWrapper>
        <LineWrapper>
          <Title>
            <FormattedMessage {...messages.header} />
          </Title>
        </LineWrapper>
        <LineWrapper>
          <Table content={this.props.content} />
        </LineWrapper>
        <LineWrapper>
          <TextInput
            placeholder={messages.username}
            action={this.onUsernameInput}
            value={this.props.username}
          />
          <Button
            action={this.props.play}
            label={messages.play}
            disabled={this.props.isReady}
          ></Button>
        </LineWrapper>
      </LandingWrapper>
    );
  }
}

LandingPage.propTypes = {
  play: PropTypes.func,
  isReady: PropTypes.bool,
  content: PropTypes.array,
  enablePlay: PropTypes.func,
  username: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectRanking(),
  isReady: makeSelectIsAllSet(),
  username: makeSelectUsername(),
});

export const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(push('/play')),
  enablePlay: (username, disable) => dispatch(readyToPlay(username, disable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(LandingPage));

