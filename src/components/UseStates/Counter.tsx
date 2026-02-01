import { useReducer } from "react";
// Counter component managing a count state with increment and decrement functionality



// types for state and action used in the reducer, defining structure of state and possible actions, used in useReducer hook
type CounterState = {
  count: number;
};

// discriminated unions updateAction and resetAction
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
}

type ResetAction = {
  type: "reset"
}


type CounterAction = UpdateAction | ResetAction;

// initial state for the counter
const initialState = { count: 0 };


// Counter component definition, using useReducer for state management, with buttons to increment and decrement the count
function reducer(state: CounterState, action: CounterAction) {
  // reducer function to handle state transitions based on action type, updating count accordingly
  switch (action.type) {
    // increment action increases count by payload value, decrement action decreases count by payload value, default case returns current state
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState
    default:
      return state;
  }
}

// Counter component definition, using useReducer for state management, with buttons to increment and decrement the count
export const Counter = () => {
  // useReducer hook to manage count state with reducer function and initial state, returning current state and dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </>
  );
};
