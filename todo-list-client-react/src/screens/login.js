import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/session";

export default function Login({ history }) {
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (session.id) {
        history.push(`/`);
      }
    },
    [session, history]
  );
  console.log(session);
  return (
    <div className="login-screen">
      <div className="login-container">
        <input placeholder="Email" defaultValue="hi@christiancastillejo.com" />
        <input placeholder="Password" defaultValue="todoList123" />
        <button
          className="login-button"
          type="button"
          onClick={() =>
            dispatch(
              login({
                email: "hi@christiancastillejo.com",
                password: "todoList123"
              })
            )
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  }).isRequired
};
