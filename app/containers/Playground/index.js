import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import Ball from 'components/Ball/index';

import { makeSelectClicks, makeSelectStage } from './selectors';
import { increaseBounces, updateStage } from './actions';
import { Wrapper, Text } from './Styles';

import messages from './messages';
import { withMotivation } from './supportiveMessages';
import './Playground.min.css';

export class Playground extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { seconds: 30, stage: '' };
  }

  componentDidMount() {
    setTimeout(this.props.gameOver, 30000);
    this.interval = setInterval(() => this.tick(), 1000);
    if (this.state.seconds === 0) {
      this.props.gameOver();
    }
  }

  componentWillUpdate() {
    if (this.props.clicks % 20 === 0) {
      const stage = withMotivation(this.props.clicks);
      this.props.setStage(stage);
      setTimeout(this.props.clearStage, 1300);
    }
  }

  tick() {
    this.setState((prevState) => ({
      seconds: prevState.seconds - 1,
    }));
  }

  render() {
    return (
      <Wrapper>
        <Text>
          <FormattedMessage {...messages.header} />
        </Text >

        <Text className={'big'}>
          {this.props.clicks}
        </Text>

        <div onClick={this.props.bounce} role={'presentation'}>
          <Ball />
        </div>

        <Text className={'big bottom'}>
          {this.state.seconds} seconds
        </Text >

        <Text className={'big bottom'}>
          {this.props.currentStage && <FormattedMessage
            {...messages.incentive}
            values={{ stage: this.props.currentStage }}
          />}
        </Text>
      </Wrapper>
    );
  }
}

Playground.propTypes = {
  clicks: PropTypes.number,
  bounce: PropTypes.func,
  setStage: PropTypes.func,
  clearStage: PropTypes.func,
  gameOver: PropTypes.func,
  currentStage: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clicks: makeSelectClicks(),
  currentStage: makeSelectStage(),
});

export const mapDispatchToProps = (dispatch) => ({
  bounce: () => dispatch(increaseBounces()),
  setStage: (stage) => dispatch(updateStage(stage)),
  clearStage: () => dispatch(updateStage(undefined)),
  gameOver: () => dispatch(push('/')),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Playground);
