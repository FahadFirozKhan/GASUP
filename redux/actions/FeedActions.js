import {
  GET_YOUTUBE_VIDEOS,
  GET_MORE_YOUTUBE_VIDEOS,
  CURRENTLY_PLAYING_VIDEO_ID,
} from '../types';
import { googleAPIKey } from '../../utils/AppConstants';

export const getVideos = () => async dispatch => {
  const query = "https://www.googleapis.com/youtube/v3/videos"
    + "?part=snippet"
    + "&chart=mostPopular"
    + `&maxResults=${10}`
    + `&key=${googleAPIKey}`

  try {
    const json_response = await fetch(query, { method: "GET" })
    const result = await json_response.json()

    // console.log("results received : ", result.items.length);
    dispatch({
      type: GET_YOUTUBE_VIDEOS,
      payload: result
    })
  } catch (e) {
    console.log("Error fetching videos from YouTube: ", e.message);
  }
}

export const getMoreVideos = (nextPageToken) => async dispatch => {
  const query = "https://www.googleapis.com/youtube/v3/videos"
  + "?part=snippet"
  + "&chart=mostPopular"
  + `&maxResults=${10}`
  + `&key=${googleAPIKey}`
  + `&pageToken=${nextPageToken}`

  try {
    const json_response = await fetch(query, { method: "GET" })
    const result = await json_response.json()

    console.log("results received : ", result.items.length);
    dispatch({
      type: GET_MORE_YOUTUBE_VIDEOS,
      payload: result
    })
  } catch (e) {
    console.log("Error fetching more videos from YouTube: ", e.message);
  }
}

export const updateCurrentlyPlayingVideoId = id => dispatch => {

  dispatch({
    type: CURRENTLY_PLAYING_VIDEO_ID,
    payload: id
  })
}
