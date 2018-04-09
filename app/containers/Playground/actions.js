import { callFetchRanking, callUpdateRanking } from 'api/ranking';
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

export function saveAndReset(player, score, stage) {
  const lastPlay = {
    player,
    score,
    stage: stage || ' - ',
  };
  return {
    type: SAVE_AND_RESET,
    player,
    score,
    stage,
    promise: callUpdateRanking(lastPlay),
  };
}

export function fetchRanking() {
  return {
    type: FETCH_RANKING,
    promise: callFetchRanking(),
  };
}
