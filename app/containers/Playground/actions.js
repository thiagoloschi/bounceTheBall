import { callFetchRanking } from 'api/ranking';
import {
  BOUNCE_THE_BALL,
  UPDATE_STAGE,
  READY_TO_PLAY,
  SAVE_AND_RESET,
  FETCH_RANKING,
} from './constants';

export function increaseBounces() {
  return {
    type: BOUNCE_THE_BALL,
  };
}

export function updateStage(stage) {
  return {
    type: UPDATE_STAGE,
    stage,
  };
}

export function readyToPlay(username, disable) {
  return {
    type: READY_TO_PLAY,
    username,
    disable,
  };
}

export function saveAndReset(username, score, stage) {
  return {
    type: SAVE_AND_RESET,
    username,
    score,
    stage,
  };
}

export function fetchRanking() {
  return {
    type: FETCH_RANKING,
    promise: callFetchRanking(),
  };
}
