import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import { localdata } from "./utils";

import {
  START_LOADING,
  STOP_LOADING,
  GET_VEHICLES_START,
  GET_VEHICLES_SUCCESS,
  GET_SINGLE_VEHICLE_START,
  GET_SINGLE_VEHICLE_SUCCESS,
  GETTING_NAME,
  GET_TOTAL_PRICE,
  SUBMIT_VEHICLE,
  HIDE_ALL,
  SHOW_ALL,
} from "./action";

const initialState = {
  is_loading: false,
  vehicles: localdata,
  single_vehicle: {},
  description: {
    current_name: "",
    help_text: "",
  },
  free_vacancies: 56,
  site_display: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayHandlerHide = () => {
    dispatch({ type: HIDE_ALL });
  };

  const displayHandlerShow = () => {
    dispatch({ type: SHOW_ALL });
  };

  const loaderHide = () => {
    dispatch({ type: STOP_LOADING });
  };

  const loaderShow = () => {
    dispatch({ type: START_LOADING });
  };

  const getName = (title, help) => {
    dispatch({ type: GETTING_NAME, payload: { title, help } });
  };

  const getTotalPrice = (firstPrice, secondPrice) => {
    dispatch({
      type: GET_TOTAL_PRICE,
      payload: { firstPrice, secondPrice },
    });
  };

  /* const calculateVacancies = (occupied) => {
    dispatch({ type: CALCULATE_VACANCIES, payload: { occupied } });
  };

  const calculateVehicles = (value) => {
    dispatch({ type: CALCULATE_VEHICLES, payload: value });
  }; */

  const registerVehicle = (id, name, idNum, phone, type, time, singlePrice) => {
    dispatch({
      type: SUBMIT_VEHICLE,
      payload: { id, name, idNum, phone, type, time, singlePrice },
    });
  };

  const singleVehicle = (id) => {
    dispatch({ type: GET_VEHICLES_START });
    try {
      const singleData = localdata;
      dispatch({ type: GET_VEHICLES_SUCCESS, payload: { id, singleData } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getName,
        getTotalPrice,
        singleVehicle,
        loaderHide,
        loaderShow,
        /*  calculateVacancies,
        calculateVehicles, */
        registerVehicle,
        displayHandlerHide,
        displayHandlerShow,
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
