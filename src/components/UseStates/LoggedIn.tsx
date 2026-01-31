import { useState } from "react";

// LoggedIn component managing login state with buttons to log in and out
export const LoggedIn = () => {
  // state variable to track if user is logged in, initialized to false, useState hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    // UI with login and logout buttons and display of login status
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* Display whether the user is logged in or logged out, based on isLoggedIn state, ehtolauseke ? "logged in" : "logged out" */}
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};
