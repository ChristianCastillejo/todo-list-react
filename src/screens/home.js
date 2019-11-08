import React from "react";

function Home() {
  return (
    <div className="screen home-container">
      <div className="add-todo">
        <textarea placeholder="Add something..." />
        <button>
          <i className="fa fa-plus-circle" />
          <p>Add todo</p>
        </button>
      </div>
      <div className="todo-list">
        <div className="todo-item">
          <div className="todo-item-buttons">
            <button>
              <i className="fa fa-times" />
            </button>
          </div>
          <p>blabla</p>
        </div>
        <div className="todo-item">
          <div className="todo-item-buttons">
            <button>
              <i className="fa fa-times" />
            </button>
          </div>
          <p>blabla</p>
        </div>
        <div className="todo-item">
          <div className="todo-item-buttons">
            <button>
              <i className="fa fa-times" />
            </button>
          </div>
          <p>blabla</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
