import {} from '../types';

const INITIAL_STATE = {
  feed: [],
  currentlyPlayingIndex: NaN,
}

function feedReducer(currentState = INITIAL_STATE, { type, payload }) {
  switch (type) {
    default:
      return currentState;
  }
}

export default feedReducer;
