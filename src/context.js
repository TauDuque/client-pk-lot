import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

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
  SUBMIT_VEHICLE,
  HIDE_ALL,
  SHOW_ALL,
} from "./action";

const initialState = {
  is_loading: false,
  vehicles: [],
  single_vehicle: {},
  description: {
    current_name: "",
    help_text: "",
  },
  free_vacancies: 56,
  site_display: true,
  total_day_gain: 0,
  gains: [],
  total_month_gain: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const api = axios.create({
    baseURL: "https://parking-lot-app-back-end.herokuapp.com/",
  });

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

  const registerVehicle = (
    id,
    nome,
    id_num,
    phone,
    type,
    time,
    single_price
  ) => {
    dispatch({
      type: SUBMIT_VEHICLE,
      payload: { id, nome, id_num, phone, type, time, single_price },
    });
  };

  const fetchData = async () => {
    dispatch({ type: GET_VEHICLES_START });
    try {
      const response = await api.get("vehicles");
      const vehicles = await response.data;
      dispatch({ type: GET_VEHICLES_SUCCESS, payload: vehicles });
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalValueDay = async () => {
    try {
      const response = await api.get("vehicles");
      const vehicles = await response.data;
      const value = vehicles.map((item) => parseInt(item.single_price));
      console.log(value);
      dispatch({ type: GET_TOTAL_PRICE, payload: value });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGainData = async () => {
    dispatch({ type: GAINS_DATA_START });
    try {
      const response = await api.get("gains");
      const gains = await response.data;
      dispatch({ type: GAINS_DATA_SUCCESS, payload: gains });
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalValueMonth = async () => {
    try {
      const response = await api.get("gains");
      const gains = await response.data;
      const monthValue = gains.map((item) => parseInt(item.valor));
      dispatch({ type: GET_MONTH_VALUE, payload: monthValue });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleVehicle = async (id) => {
    dispatch({ type: GET_SINGLE_VEHICLE_START });
    try {
      const response = await api.get("vehicles");
      const singleData = await response.data;
      dispatch({
        type: GET_SINGLE_VEHICLE_SUCCESS,
        payload: { singleData, id },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchGainData();
    getTotalValueDay();
    getTotalValueMonth();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getName,
        fetchSingleVehicle,
        loaderHide,
        loaderShow,
        registerVehicle,
        displayHandlerHide,
        displayHandlerShow,
        fetchData,
        getTotalValueDay,
        getTotalValueMonth,
        api,
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
