import { useReducer } from "react";
// Counter component managing a count state with increment and decrement functionality



// types for state and action used in the reducer, defining structure of state and possible actions, used in useReducer hook
type CounterState = {
  count: number; // state has a count property of type number
};

<<<<<<< HEAD
// action can be of type increment or decrement with a payload number, representing the amount to change the count, used in the reducer function
type CounterAction = {
  type: "increment" | "decrement"; // action type can be either increment or decrement
  payload: number; // payload represents the amount to change the count
};
=======
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

>>>>>>> bb54eba264669fd4697f2cd00020cb5160f8e477

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
        {" "}
        {/* dispatch action to increment count by 10 */}
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </>
  );
};
