// event handler with type annotations for input change events in React with TypeScript

import React from "react";

// interface for input props, including a function type for handleChange
type InputProps = {
  // string type for value prop
  value: string;
  // function type for handleChange prop, accepting an event parameter
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Input component, accepting InputProps, returning an input element
export const Input = (props: InputProps) => {
  return (
    // input element with value and onChange event handler, passing event to handleChange
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};

// You can replace 'props' with destructured parameters if preferred
// export const Input = ({ value, handleChange }: InputProps) => {
//   return (
//     <input type="text" value={value} onChange={handleChange} />
//   );
// };
