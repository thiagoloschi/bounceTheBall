import { fromJS } from 'immutable';
import { BOUNCE_THE_BALL, UPDATE_STAGE } from './constants';

export const initialState = fromJS({
  clicks: 0,
  stage: ' ',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case BOUNCE_THE_BALL:
      return state.update('clicks', (x) => x + 1);
    case UPDATE_STAGE:
      return state.merge({ stage: action.stage });
    default:
      return state;
  }
};
