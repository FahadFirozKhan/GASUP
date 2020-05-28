import { SET_INITIAL_VALUES, UPDATE_STRIP_VALUE } from '../types';

const INITIAL_STATE = {
  initialValues: [],
  valuesLoaded: false,
};

function stripsReducer(currentState = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SET_INITIAL_VALUES:
      return {
        ...currentState,
        initialValues: payload,
        valuesLoaded: true,
      }

    case UPDATE_STRIP_VALUE:
      const {x_index, y_index} = payload;
      const { initialValues } = currentState;
      console.log("-update computing with ", x_index, " and ", y_index);
      
      if (initialValues.length < x_index) return currentState;
      console.log("-update passed 1st test ");
      
      if (!Array.isArray(initialValues[x_index].values) 
      || initialValues[x_index].values.length < y_index) {
        console.log("-update failed 2nd test ", y_index);
        return currentState;
      } else {
        let valuesCopy = [...initialValues];
        
        valuesCopy[x_index] = {
          ...valuesCopy[x_index],
          value: y_index,
        }
        
        console.log("-updating ", x_index, " and ", y_index);
        return {
          ...currentState,
          initialValues: valuesCopy,
        }
      }
    default:
      return currentState;
  }
}

export default stripsReducer;
