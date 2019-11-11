import { FETCH_LOGGED_IN_USER, LOGOUT } from "../actions/actionTypes";

export const sessionReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_LOGGED_IN_USER:
      return payload.data;
    case LOGOUT:
      return payload;
    default: {
      return state;
    }
  }
};
