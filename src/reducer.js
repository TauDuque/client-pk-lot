import {
  START_LOADING,
  STOP_LOADING,
  GET_VEHICLES_START,
  GET_VEHICLES_SUCCESS,
  GET_SINGLE_VEHICLE_START,
  GET_SINGLE_VEHICLE_SUCCESS,
  GAINS_DATA_START,
  GAINS_DATA_SUCCESS,
  GETTING_NAME,
  GET_TOTAL_PRICE,
  GET_MONTH_VALUE,
  HIDE_ALL,
  SHOW_ALL,
  SUBMIT_VEHICLE,
} from "./action";

import { reducerMethod } from "./utils";

const reducer = (state, action) => {
  if (action.type === HIDE_ALL) {
    return { ...state, site_display: false };
  }

  if (action.type === SHOW_ALL) {
    return { ...state, site_display: true };
  }

  if (action.type === STOP_LOADING) {
    return { ...state, is_loading: false };
  }

  if (action.type === START_LOADING) {
    return { ...state, is_loading: true };
  }

  if (action.type === GETTING_NAME) {
    const { title, help } = action.payload;
    return { ...state, description: { current_name: title, help_text: help } };
  }

  if (action.type === GET_VEHICLES_START) {
    return { ...state, is_loading: true };
  }

  if (action.type === GET_VEHICLES_SUCCESS) {
    return {
      ...state,
      vehicles: action.payload,
    };
  }

  if (action.type === GET_SINGLE_VEHICLE_START) {
    return { ...state, is_loading: true };
  }

  if (action.type === GET_SINGLE_VEHICLE_SUCCESS) {
    const { id, singleData } = action.payload;
    const singleV = singleData.find((item) => item.id == id);
    return { ...state, is_loading: false, single_vehicle: singleV };
  }

  if (action.type === GET_TOTAL_PRICE) {
    return {
      ...state,
      total_day_gain: action.payload.reduce(reducerMethod, 0),
    };
  }

  if (action.type === GAINS_DATA_START) {
    return { ...state, is_loading: true };
  }

  if (action.type === GAINS_DATA_SUCCESS) {
    return { ...state, is_loading: false, gains: action.payload };
  }

  if (action.type === GET_MONTH_VALUE) {
    return {
      ...state,
      total_month_gain: action.payload.reduce(reducerMethod, 0),
    };
  }

  if (action.type === SUBMIT_VEHICLE) {
    const tempItem = state.vehicles.map((item) => item);
    if (tempItem) {
      const newItem = action.payload;
      const totalItems = tempItem.concat(newItem);
      return { ...state, vehicles: totalItems };
    } else return { ...state, vehicles: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
