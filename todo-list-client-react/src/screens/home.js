import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodoList, deleteTodo } from "../actions/todo";

function Home() {
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  const todo = useRef("");

  useEffect(
    () => {
      dispatch(fetchTodoList());
    },
    [dispatch, todoList.length]
  );

  const newTodo = () => {
    dispatch(addTodo(todo.current.value));
  };

  return (
    <div className="screen home-container">
      <div className="add-todo">
        <textarea placeholder="Add something..." ref={todo} />
        <button onClick={() => newTodo(todo)}>
          <i className="fa fa-plus-circle" />
          <p>Add todo</p>
        </button>
      </div>
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
    </div>
  );
}

export default Home;
