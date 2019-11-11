import { axiosInstance } from "../helpers/configured_axios";
import { FETCH_LOGGED_IN_USER, LOGOUT } from "./actionTypes";
import cookie from "react-cookies";

export const setJWT = token => {
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 90);
  cookie.save("jwt", token, { expires });
};

export const login = user => {
  return dispatch => {
    axiosInstance
      .post("/login/", {
        email: user.email,
        password: user.password
      })
      .then(response => {
        setJWT(response.data.auth_token);
        axiosInstance.defaults.headers.common.Authorization = `Authorization ${
          response.data.auth_token
        }`;
        dispatch(fetchLoggedInUser());
      })
      .catch(err => {
        alert(
          `Server not available. Please make sure it is running.\n\n${err}`
        );
      });
  };
};

export const logout = () => {
  cookie.remove("jwt");

  return {
    type: LOGOUT,
    payload: {}
  };
};

export const fetchLoggedInUser = () => {
  const request = axiosInstance.get(`/loggedinuser`);

  return {
    type: FETCH_LOGGED_IN_USER,
    payload: request
  };
};
