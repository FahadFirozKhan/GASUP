import {
  SET_INITIAL_VALUES,
  UPDATE_STRIP_VALUE,
} from '../types';

export const getInititalValues = () => async dispatch => {
  /**
   * In production app the values will be fetched from an API.
   * Here we're going to use a json string.
   */

   const json_results = `
      [
        {
          "id": "1001",
          "title": "Total Hardness (ppm)",
          "value": 0,
          "values": [
            0, 110, 250, 500, 1000
          ],
          "colors": ["#2d5b8e", "#596492", "#61588a", "#764b77", "#985182"]
        },
        {
          "id": "1002",
          "title": "Total Chlorine (ppm)",
          "value": 0,
          "values": [
            0, 1, 3, 5, 10
          ],
          "colors": ["#fff06c", "#f5f87f", "#dfeb6f", "#a6cb9e", "#86c09a"]
        },
        {
          "id": "1003",
          "title": "Free Chlorine (ppm)",
          "value": 0,
          "values": [
            0, 1, 3, 5, 10
          ],
          "colors": ["#fef09c", "#e6d9c9", "#b192b8", "#96679f", "#773e81"]
        },
        {
          "id": "1004",
          "title": "pH (ppm)",
          "value": 0,
          "values": [
            6.2, 6.8, 7.2, 7.8, 8.4
          ],
          "colors": ["#de9149", "#ec773e", "#d0552a", "#ce524a", "#d63247"]
        },
        {
          "id": "1005",
          "title": "Total Alkalinity (ppm)",
          "value": 0,
          "values": [
            0, 40, 120, 180, 240
          ],
          "colors": ["#d29e4a", "#9f964f", "#68816f", "#367067", "#356a73"]
        },
        {
          "id": "1006",
          "title": "Cyanuric Acid (ppm)",
          "value": 0,
          "values": [
            0, 50, 100, 150, 300
          ],
          "colors": ["#c58944", "#bf682e", "#af454d", "#90275c", "#842e77"]
        }
      ]
   `

   dispatch({
     type: SET_INITIAL_VALUES,
     payload: JSON.parse(json_results)
   })
}

export const updateValue = body => async dispatch => {
  // console.log("-update triggered = ", JSON.stringify(body));

  dispatch({
    type: UPDATE_STRIP_VALUE,
    payload: body,
  })
}