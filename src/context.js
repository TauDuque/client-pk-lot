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
  vacancies: 56,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getName = (title, help) => {
    dispatch({ type: GETTING_NAME, payload: { title, help } });
  };

  return (
    <AppContext.Provider value={{ ...state, getName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
