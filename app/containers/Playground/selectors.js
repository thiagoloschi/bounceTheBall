import { createSelector } from 'reselect';

const selectPlayground = (state) => state.get('playground');

export const makeSelectClicks = () => createSelector(
  selectPlayground,
  (state) => state.get('clicks')
);

export const makeSelectStage = () => createSelector(
  selectPlayground,
  (state) => state.get('stage')
);

export const makeSelectRanking = () => createSelector(
  selectPlayground,
  (state) => state.get('ranking').toJS()
);
