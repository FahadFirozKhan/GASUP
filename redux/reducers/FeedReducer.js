import { GET_YOUTUBE_VIDEOS, GET_MORE_YOUTUBE_VIDEOS } from '../types';

const INITIAL_STATE = {
  feed: [],
  currentlyPlayingIndex: NaN,
  nextPageToken: "",
}

function feedReducer(currentState = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_YOUTUBE_VIDEOS:
      return {
        ...currentState,
        feed: payload.items,
        nextPageToken: payload.nextPageToken
      }
      
    case GET_MORE_YOUTUBE_VIDEOS:
      if (currentState.nextPageToken===payload.nextPageToken) return currentState;

      return {
        ...currentState,
        feed: [...currentState.feed, ...payload.items],
        nextPageToken: payload.nextPageToken
      }

    default:
      return currentState;
  }
}

export default feedReducer;
