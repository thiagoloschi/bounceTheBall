import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import Ball from 'components/Ball/index';

import { makeSelectClicks, makeSelectStage } from './selectors';
import { increaseBounces, updateStage } from './actions';

import messages from './messages';
import { withMotivation } from './supportiveMessages';
import './Playground.min.css';

export class Playground extends React.PureComponent {

  componentWillUpdate() {
    if (this.props.clicks % 20 === 0) {
      const stage = withMotivation(this.props.clicks);
      this.props.setStage(stage);
      setTimeout(this.props.clearStage, 1300);
    }
  }

  render() {
    return (
      <div className={'playground'}>
        <div className={'playground__text'}>
          <FormattedMessage {...messages.header} />
        </div >
        <div className={'playground__text --big'}>
          {this.props.clicks}
        </div>
        <div
          onClick={this.props.bounce}
          role={'presentation'}
        >
          <Ball />
        </div>

        <div className={'playground__text --big --bottom'}>
          {this.props.currentStage && <FormattedMessage
            {...messages.incentive}
            values={{ stage: this.props.currentStage }}
          />}
        </div >
      </div>
    );
  }
}

Playground.propTypes = {
  clicks: PropTypes.number,
  bounce: PropTypes.func,
  setStage: PropTypes.func,
  clearStage: PropTypes.func,
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
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Playground);
