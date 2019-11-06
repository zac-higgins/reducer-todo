import React, { useReducer, useState } from 'react';
import './css/app.css';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { task: action.payload, completed: false }]
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((item, index) => index === action.index ? { ...item, completed: !item.completed } : item)
      };
    default:
      throw new Error("No action matched!");
  }
};

const initialState = { todos: [] }

const App = () => {
  const [{ todos }, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", payload: task });
          setTask("");
        }}
      >
        <input value={task} onChange={e => setTask(e.target.value)} />
      </form>
      {todos.map((item, index) => {
        return (
          <div
            key={item.task}
            onClick={() => dispatch({ type: "TOGGLE_TODO", index })}
            style={{
              textDecoration: item.completed ? "line-through" : ""
            }}
          >
            {item.task}
          </div>
        )
      })}

    </div>
  );
}

export default App;
