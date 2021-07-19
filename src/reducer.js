import {
  START_LOADING,
  STOPT_LOADING,
  GET_VEHICLES_START,
  GET_VEHICLES_SUCCESS,
  GET_SINGLE_VEHICLE_START,
  GET_SINGLE_VEHICLE_SUCCESS,
  GETTING_NAME,
} from "./action";

const reducer = (state, action) => {
  if (action.type === GETTING_NAME) {
    const { title, help } = action.payload;
    return { ...state, description: { current_name: title, help_text: help } };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
