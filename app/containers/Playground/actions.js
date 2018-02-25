import { BOUNCE_THE_BALL, UPDATE_STAGE } from './constants';

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
