import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodoList, deleteTodo } from "../actions/todo";
import Fade from "react-reveal/Fade";

function Home() {
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  useEffect(
    () => {
      dispatch(fetchTodoList());
    },
    [dispatch, todoList.length]
  );

  const newTodo = () => {
    if (todo !== "") {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <div className="screen home-container">
      <Fade top>
        <div className="add-todo">
          <textarea
            placeholder="Add something..."
            onChange={e => setTodo(e.target.value)}
            value={todo}
          />
          <button onClick={() => newTodo(todo)}>
            <i className="fa fa-plus-circle" />
            <p>Add todo</p>
          </button>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="todo-list">
          {todoList.map(todo => (
            <div key={todo.id} className="todo-item">
              <div className="todo-item-buttons">
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  <i className="fa fa-times" />
                </button>
              </div>
              <p>{todo.title}</p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Home;
