import * as screenActionTypes from "./actionTypes";
import axios from "axios";
import { baseURL } from "../../ui-utils/commons";
import createStore from "../store";


const { store } = createStore;
export const prepareFinalObject = (jsonPath, value) => {
  return {
    type: screenActionTypes.PREPARE_FINAL_OBJECT,
    jsonPath,
    value
  };
};

// add New User
export const addNewUser = (data) => {
  console.log({ data });
  return {
    type: screenActionTypes.ADD_USER_OBJECT,
    data
  };
};

//add new Login
export const addlogin = (dataLogin) => {
  return {
    type: screenActionTypes.ADD_LOGIN,
    dataLogin
  }
}

//ad Delete id
export const deleteId = (dataDelete) => {
  return {
    type: screenActionTypes.DELETE_ID,
    dataDelete
  }
}

//GET RESPONSE FROM API
export const getUsersData = () => {
  return async (dispatch) => {
    dispatch({ type: screenActionTypes.FETCH_USERS_STARTED });
    try {
      const response = await axios.get(`${baseURL}/users`);
      console.log("response", response);
      dispatch({ type: screenActionTypes.FETCH_USERS_COMPLETED, data: response?.data });
    } catch (e) {
      dispatch({ type: screenActionTypes.FETCH_USERS_FAILED });
    }
  }
};

//get users dataByID
export const getUsersDataById = (id) => {
  return async (dispatch) => {
    dispatch({ type: screenActionTypes.FETCH_GETBYID_STARTED });
    try {
      const response = await axios.get(`${baseURL}/users/${id}`);
      console.log("response by id", response);
      dispatch({ type: screenActionTypes.FETCH_GETBYID_COMPLETED, data: response?.data });
    } catch (e) {
      dispatch({ type: screenActionTypes.FETCH_GETBYID_FAILED });
    }
  }
};

//update users data
export const updateUsersData = (id) => {
  return async (dispatch) => {
    dispatch({type: screenActionTypes.UPDATE_USERS_STARTED});
    try{
      const response = await axios.put(`${baseURL}/users/${id}`);
      dispatch({type: screenActionTypes.UPDATE_USERS_COMPLETED, data: response?.data });
    }catch(e) {
      dispatch({ type: screenActionTypes.UPDATE_USERS_FAILED});
    }
  };
};