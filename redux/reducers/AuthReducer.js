import {
  RESTORE_TOKEN,
  SIGN_IN,
  SIGN_OUT,
} from '../types';

const INITIAL_STATE = {
  isLoading: true,
  isSignout: false,
  userToken: null,
}

function authReducer(currentState = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case RESTORE_TOKEN:
      return {
        ...currentState,
        userToken: payload,
        isLoading: false,
      };

    case SIGN_IN:
      console.log("--**** ", payload)
      return {
        ...currentState,
        isSignout: false,
        userToken: payload,
      };

    case SIGN_OUT:
      return {
        ...currentState,
        isSignout: true,
        userToken: null,
      };

    default:
      return currentState;
  }
}

export default authReducer;
