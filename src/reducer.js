import {
  START_LOADING,
  STOPT_LOADING,
  GET_VEHICLES_START,
  GET_VEHICLES_SUCCESS,
  GET_SINGLE_VEHICLE_START,
  GET_SINGLE_VEHICLE_SUCCESS,
  GETTING_NAME,
  GET_TOTAL_PRICE,
  CALCULATE_VACANCIES,
  CALCULATE_VEHICLES,
  SUBMIT_VEHICLE,
} from "./action";

const reducer = (state, action) => {
  if (action.type === GETTING_NAME) {
    const { title, help } = action.payload;
    return { ...state, description: { current_name: title, help_text: help } };
  }
  if (action.type === GET_TOTAL_PRICE) {
    if (state.current_value == 0) {
      const { firstPrice, secondPrice } = action.payload;
      return {
        ...state,
        current_value: firstPrice + secondPrice,
      };
    } else {
      const { firstPrice, secondPrice } = action.payload;
      const newValue = firstPrice + secondPrice;
      return { ...state, current_value: state.current_value + newValue };
    }
  }
  if (action.type === CALCULATE_VACANCIES) {
    const { occupied } = action.payload;
    return { ...state, free_vacancies: state.free_vacancies - occupied };
  }

  if (action.type === CALCULATE_VEHICLES) {
    if (state.current_vehicles > 0) {
      return {
        ...state,
        current_vehicles: state.current_vehicles + action.payload,
      };
    } else
      return {
        ...state,
        current_vehicles: action.payload,
      };
  }

  if (action.type === SUBMIT_VEHICLE) {
    const tempItem = state.vehicles.map((item) => item);
    if (tempItem) {
      const newItem = action.payload;
      return { ...state, vehicles: [...state.vehicles, newItem] };
    } else return { ...state, vehicles: [action.payload] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
