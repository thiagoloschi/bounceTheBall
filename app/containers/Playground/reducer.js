import { fromJS } from 'immutable';
import {
  BOUNCE_THE_BALL,
  UPDATE_STAGE,
  READY_TO_PLAY,
  SAVE_AND_RESET,
} from './constants';

export const initialState = fromJS({
  clicks: 0,
  stage: undefined,
  ranking: [
    { player: 'Monique', score: 168, stage: 'OUTRAGEOUS' },
    { player: 'Thiago', score: 146, stage: 'COLOSSAL' },
    { player: 'Nina', score: 122, stage: 'UNBELIEVABLE' },
  ],
  user: {
    name: undefined,
    isUsernameWrong: true,
  },
});

const saveProgressAndResetData = (state, action) => {
  const top5 = state.get('ranking').toJS();
  const stage = action.stage ? action.stage : ' - ';
  const lastPlay = {
    player: action.username,
    score: action.score,
    stage,
  };
  top5.push(lastPlay);
  return state.mergeDeep({
    clicks: 0,
    stage: undefined,
    ranking: top5,
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
    default:
      return state;
  }
};
