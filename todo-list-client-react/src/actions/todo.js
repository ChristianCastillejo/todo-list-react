import { axiosInstance } from "../helpers/configured_axios";
import { FETCH_TODO_LIST } from "./actionTypes";

export const fetchTodoList = () => {
  const request = axiosInstance.get("/todos/");

  return {
    type: FETCH_TODO_LIST,
    payload: request
  };
};

export const addTodo = todo => {
  return dispatch => {
    axiosInstance.post("/todos/", { title: todo }).then(() => {
      dispatch(fetchTodoList());
    });
  };
};

export const deleteTodo = todo => {
  return dispatch => {
    axiosInstance.delete(`/todos/${todo}`).then(() => {
      dispatch(fetchTodoList());
    });
  };
};
