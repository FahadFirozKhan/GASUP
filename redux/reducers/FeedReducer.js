import {
  GET_YOUTUBE_VIDEOS,
  GET_MORE_YOUTUBE_VIDEOS,
  CURRENTLY_PLAYING_VIDEO_ID,
} from '../types';

const INITIAL_STATE = {
  feed: [],
  currentlyPlayingId: null,
  nextPageToken: "",
}

function feedReducer(currentState = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_YOUTUBE_VIDEOS:
      return {
        ...currentState,
        feed: payload.items,
        nextPageToken: payload.nextPageToken,
        currentlyPlayingId: null,
      }
      
    case GET_MORE_YOUTUBE_VIDEOS:
      if (currentState.nextPageToken===payload.nextPageToken) return currentState;

      return {
        ...currentState,
        feed: [...currentState.feed, ...payload.items],
        nextPageToken: payload.nextPageToken
      }

    case CURRENTLY_PLAYING_VIDEO_ID:
      return {
        ...currentState,
        currentlyPlayingId: payload
      }

    default:
      return currentState;
  }
}

export default feedReducer;
