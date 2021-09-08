import * as screenActionTypes from "./actionTypes";
import { prepareFinalObject } from "./utils";

const getUserInfo = () => {
  const userInfo = window.localStorage.getItem("userInfo");
  return userInfo ? JSON.parse(userInfo) : {};
};

const intialState = {
  preparedFinalObject: {
    snackbar: {
      open: false,
      variant: "success",
      message: ""
    },
    users: {
      data: [],
      isLoading: false,
      isFailed: false,
      isSuccess: false
    },
    usersDetails: {
      data: {},
      isLoading: false,
      isFailed: false,
      isSuccess: false
    },
    updateUser: {
      data: {},
      isSuccess: false,
      isLoading: false,
      isFailed: false
    },

    // usersData: [
    //   {
    //     id: "11",
    //     address: "#151 BHARATHI CALONY 2ND CROSS N T ROAD",
    //     company: "mihy",
    //     email: "sharath7178@gmail.com",
    //     name: "sharath S",
    //     phone: "09916557178",
    //     username: "vishwas191108@gmail.com",
    //     website: "sfs"
    //   }
    // ],
    newUser:
    {
      name: "",
      username: "",
      email: "",
      address: "",
      phone: "",
      website: "",
      company: ""
    },
    // Login: [],
    // newlogin: {
    //   username: "",
    //   password: ""
    // },

    ResponseData: [],

    userInfo: getUserInfo(),
  }
};

const screenConfiguration = (state = intialState, action) => {
  switch (action.type) {
    case screenActionTypes.PREPARE_FINAL_OBJECT:
      const updatedPreparedFinalObject = prepareFinalObject(
        state.preparedFinalObject,
        action.jsonPath,
        action.value
      );
      return {
        ...state,
        preparedFinalObject: updatedPreparedFinalObject
      };

    case screenActionTypes.ADD_USER_OBJECT:
      let tempUsers = state.preparedFinalObject.users?.data;
      tempUsers.push({ ...action.data, id: tempUsers.length + 1 });
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          newUser: { ...action.data },
          users: {
            ...state.preparedFinalObject.users,
            data: tempUsers
          }
        }
      }

    case screenActionTypes.ADD_LOGIN:
      let tempLogin = state.preparedFinalObject.Login;
      tempLogin.push(action.dataLogin);
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          newlogin: action.dataLogin,
          Login: tempLogin
        }
      }

    case screenActionTypes.FETCH_USERS_STARTED:
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          users: {
            data: [],
            isSuccess: false,
            isFailed: false,
            isLoading: true
          }
        }
      }

    case screenActionTypes.FETCH_USERS_COMPLETED:
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          users: {
            data: action.data,
            isSuccess: true,
            isFailed: false,
            isLoading: false
          }
        }
      }

    case screenActionTypes.FETCH_USERS_FAILED:
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          users: {
            data: [],
            isSuccess: true,
            isFailed: true,
            isLoading: false
          }
        }
      }

    case screenActionTypes.FETCH_GETBYID_STARTED:
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          usersDetails: {
            data: {},
            isLoading: true,
            isFailed: false,
            isSuccess: false
          }
        }
      }

    case screenActionTypes.FETCH_GETBYID_COMPLETED:
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          usersDetails: {
            data: action.data,
            isLoading: false,
            isSuccess: true,
            isFailed: false
          }
        }
      }

    case screenActionTypes.FETCH_GETBYID_FAILED:
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          usersDetails: {
            data: {},
            isLoading: false,
            isSuccess: true,
            isFailed: true
          }
        }
      }

    case screenActionTypes.UPDATE_USERS_STARTED:
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          updateUser: {
            data: {},
            isSuccess: false,
            isLoading: true,
            isFailedL: false
          }
        }
      }

    case screenActionTypes.UPDATE_USERS_COMPLETED:
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          updateUser: {
            data: {},
            isSuccess: true,
            isLoading: false,
            isFailed: false,
          }
        }
      }

    case screenActionTypes.UPDATE_USERS_FAILED:
      return {
        ...state,
        preparedFinalObject: {
          ...state.preparedFinalObject,
          updateUser: {
            data: {},
            isSuccess: false,
            isLoading: false,
            isFailed: true,
          }
        }
      }
    // case screenActionTypes.RESPONSE_DATA:
    //   let tempResponse = state.preparedFinalObject.ResponseData;
    //   tempResponse.push(action.responseData);
    //   return{
    //     ...state,
    //     preparedFinalObject: {
    //       ...state.preparedFinalObject,
    //       ResponseData:tempResponse
    //     }
    //   }

    default:
      return state;
  }
};

export default screenConfiguration;