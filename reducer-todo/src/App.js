import React, { useReducer, useState } from 'react';
import './css/app.css';
import { reducer, initialState } from './reducers/reducer';


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
      <button onClick={e => {
        e.preventDefault();
        dispatch({ type: "CLEAR_COMPLETED" });
      }}>Clear Completed</button>
      {todos.map((item, index) => {
        return (
          <div
            key={item.id}
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
