import {
  START_LOADING,
  STOPT_LOADING,
  GET_VEHICLES_START,
  GET_VEHICLES_SUCCESS,
  GET_SINGLE_VEHICLE_START,
  GET_SINGLE_VEHICLE_SUCCESS,
  TESTING_NAME,
} from "./action";

const reducer = (state, action) => {
  if (action.type === TESTING_NAME) {
    const name = action.payload;
    return { ...state, current_name: name };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
