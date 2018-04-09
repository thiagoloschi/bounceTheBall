import { fromJS } from 'immutable';
import { handle } from 'redux-pack';
import {
  BOUNCE_THE_BALL,
  UPDATE_STAGE,
  READY_TO_PLAY,
  SAVE_AND_RESET,
  FETCH_RANKING,
} from './constants';

export const initialState = fromJS({
  clicks: 0,
  stage: undefined,
  ranking: [],
  user: {
    name: undefined,
    isUsernameWrong: true,
  },
});

const saveProgressAndResetData = (state, action) =>
  handle(state, action, {
    finish: (prevState) => prevState.mergeDeep({
      clicks: 0,
      stage: undefined,
    }),
  });

const handleFetchRanking = (state, action) => {
  const payload = action.payload;
  return handle(state, action, {
    success: (prevState) => prevState.merge({ ranking: payload }),
    failure: (prevState) => prevState,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOUNCE_THE_BALL:
      return state.update('clicks', (x) => x + 1);
    case UPDATE_STAGE:
      return state.merge({ stage: action.stage });
    case READY_TO_PLAY:
      return state.mergeDeep({
        user: {
          isUsernameWrong: action.disable,
          name: action.username,
        },
      });
    case SAVE_AND_RESET:
      return saveProgressAndResetData(state, action);
    case FETCH_RANKING:
      return handleFetchRanking(state, action);
    default:
      return state;
  }
};
