import './App.css';
import { useReducer } from 'react';

const ACTIONS = {
  increment: 'increment',
  decrement: 'decrement',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.increment:
      return { count: state.count + 1 };
    case ACTIONS.decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.increment });
  }

  function decrement() {
    dispatch({ type: ACTIONS.decrement });
  }

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
