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
  ranking: [
    { place: 1, player: 'Monique', score: 168, stage: 'OUTRAGEOUS' },
    { place: 2, player: 'Thiago', score: 146, stage: 'COLOSSAL' },
    { place: 3, player: 'Nina', score: 122, stage: 'UNBELIEVABLE' },
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

const handleFetchRanking = (state, action) => {
  console.log(action);
  const payload = action.payload;
  return handle(state, action, {
    success: (prevState) => {
      console.log(payload);
      return prevState;
    },
    failure: (prevState) => {
      console.log(payload);
      return prevState;
    },
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
