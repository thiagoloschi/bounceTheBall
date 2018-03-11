import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import Ball from 'components/Ball/index';

import { makeSelectClicks, makeSelectStage, makeSelectUsername } from './selectors';
import { increaseBounces, updateStage, saveAndReset } from './actions';
import { Wrapper, Text, TextBig, TextBigBottomLeft, TextBigBottomRight, BallWrapper, Header, Container, Stats } from './Playground';

import messages from './messages';
import { withMotivation } from './supportiveMessages';

export class Playground extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { seconds: 30 };
  }

  componentDidMount() {
    if (this.state.seconds === 30) {
      this.interval = setInterval(this.tick, 1000);
    }
    if (!this.props.username) {
      this.props.gameOver();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.clicks % 20 === 0) {
      const stage = withMotivation(newProps.clicks);
      this.props.setStage(stage);
    }
  }

  componentWillUnmount() {
    this.interval = clearInterval(this.interval);
  }

  timesUp = () => {
    this.props.prepareNewGame(this.props.username, this.props.clicks, this.props.currentStage);
    return this.props.gameOver();
  }

  tick = () => {
    if (this.state.seconds === 0) {
      clearInterval(this.interval);
      return this.timesUp();
    }
    return this.setState((prevState) => ({
      seconds: prevState.seconds - 1,
    }));
  }

  render() {
    const { bounce } = this.props;
    return (
      <Wrapper>
        <Container>
          <Header>
            <Text>
              <FormattedMessage {...messages.header} />
            </Text >
            <TextBig>
              {this.props.clicks}
            </TextBig>
          </Header>
          <Stats>
            <TextBigBottomLeft onClick={bounce}>
              {this.props.currentStage && <FormattedMessage
                {...messages.incentive}
                values={{ stage: this.props.currentStage }}
              />}
            </TextBigBottomLeft>
            <TextBigBottomRight>
              {this.state.seconds}
              <FormattedMessage
                {...messages.timing}
              />
            </TextBigBottomRight>
          </Stats>
          <BallWrapper onClick={bounce}>
            <Ball />
          </BallWrapper>
        </Container>
      </Wrapper>
    );
  }
}

Playground.propTypes = {
  clicks: PropTypes.number,
  bounce: PropTypes.func,
  setStage: PropTypes.func,
  gameOver: PropTypes.func,
  prepareNewGame: PropTypes.func,
  currentStage: PropTypes.string,
  username: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clicks: makeSelectClicks(),
  currentStage: makeSelectStage(),
  username: makeSelectUsername(),
});

export const mapDispatchToProps = (dispatch) => ({
  bounce: () => dispatch(increaseBounces()),
  setStage: (stage) => dispatch(updateStage(stage)),
  gameOver: () => dispatch(push('/')),
  prepareNewGame: (username, score, stage) => dispatch(saveAndReset(username, score, stage)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Playground);
