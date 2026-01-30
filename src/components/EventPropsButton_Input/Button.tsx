// Event handler props in React with TypeScript for button click events

import React from "react";

// interface for button props, including a function type for handleClick
type ButtonProps = {
  // function type for handleClick prop, accepting event and id parameters
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

// Button component, accepting ButtonProps
export const Button = (props: ButtonProps) => {
  return (
    // button element with onClick event handler, passing event and id to handleClick
    <button onClick={(event) => props.handleClick(event, 1)}>Click Me</button>
  );
};
