import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import Ball from 'components/Ball/index';

import { makeSelectClicks, makeSelectStage } from './selectors';
import { increaseBounces, updateStage, saveAndReset } from './actions';
import { Wrapper, Text, TextBig, TextBigBottomLeft, TextBigBottomRight } from './Styles';

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
    this.props.prepareNewGame();
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
    return (
      <Wrapper>
        <Text>
          <FormattedMessage {...messages.header} />
        </Text >
        <TextBig>
          {this.props.clicks}
        </TextBig>
        <div onClick={this.props.bounce} role={'presentation'}>
          <Ball />
        </div>
        <TextBigBottomRight>
          {this.state.seconds}
          <FormattedMessage
            {...messages.timing}
          />
        </TextBigBottomRight>
        <TextBigBottomLeft>
          {this.props.currentStage && <FormattedMessage
            {...messages.incentive}
            values={{ stage: this.props.currentStage }}
          />}
        </TextBigBottomLeft>
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
};

const mapStateToProps = createStructuredSelector({
  clicks: makeSelectClicks(),
  currentStage: makeSelectStage(),
});

export const mapDispatchToProps = (dispatch, props) => ({
  bounce: () => dispatch(increaseBounces()),
  setStage: (stage) => dispatch(updateStage(stage)),
  gameOver: () => dispatch(push('/')),
  prepareNewGame: () => dispatch(saveAndReset(props.clicks, props.currentStage)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Playground);
