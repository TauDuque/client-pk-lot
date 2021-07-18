import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";

import {
  START_LOADING,
  STOPT_LOADING,
  GET_VEHICLES_START,
  GET_VEHICLES_SUCCESS,
  GET_SINGLE_VEHICLE_START,
  GET_SINGLE_VEHICLE_SUCCESS,
  TESTING_NAME,
} from "./action";

const initialState = {
  is_loading: false,
  vehicles: [],
  single_vehicle: {},
  current_name: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getName = (name) => {
    dispatch({ type: TESTING_NAME, payload: name });
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