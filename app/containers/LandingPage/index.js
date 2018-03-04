import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRanking } from 'containers/Playground/selectors';
import Button from 'components/Button';
import { Table } from 'components/Table';
import { LineWrapper } from 'commons/styledComponents/PageWrapper';

import messages from './messages';
import { LandingWrapper, Title } from './LandingPage';

export class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          <Button action={this.props.play} label={messages.play}></Button>
        </LineWrapper>
      </LandingWrapper>
    );
  }
}

LandingPage.propTypes = {
  play: PropTypes.func,
  content: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectRanking(),
});

export const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(push('/play')),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

