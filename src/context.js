import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";

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

const initialState = {
  is_loading: false,
  vehicles: [],
  single_vehicle: {},
  description: {
    current_name: "",
    help_text: "",
  },
  current_value: 0,
  current_vehicles: 0,
  free_vacancies: 56,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getName = (title, help) => {
    dispatch({ type: GETTING_NAME, payload: { title, help } });
  };

  const getTotalPrice = (firstPrice, secondPrice) => {
    dispatch({
      type: GET_TOTAL_PRICE,
      payload: { firstPrice, secondPrice },
    });
  };

  const calculateVacancies = (occupied) => {
    dispatch({ type: CALCULATE_VACANCIES, payload: { occupied } });
  };

  const calculateVehicles = (value) => {
    dispatch({ type: CALCULATE_VEHICLES, payload: value });
  };

  const registerVehicle = (name, idNum, phone, type, time) => {
    dispatch({
      type: SUBMIT_VEHICLE,
      payload: { name, idNum, phone, type, time },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getName,
        getTotalPrice,
        calculateVacancies,
        calculateVehicles,
        registerVehicle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
