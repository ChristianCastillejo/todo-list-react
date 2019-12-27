import { FETCH_TODO_LIST } from "../actions/actionTypes";

export function todoListReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TODO_LIST: {
      return action.payload.data;
    }
    default: {
      return state;
    }
  }
}
