import { useRef, useEffect } from "react";

// DomRef component demonstrating useRef to access and focus an input element on mount, using useEffect to trigger focus after component renders
export const DomRef = () => {
  // create a ref for the input element, initialized to null, with type inference, using useRef hook
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect hook to focus the input element when the component mounts, runs only once due to empty dependency array
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} /> {/*  */}
    </div>
  );
};
