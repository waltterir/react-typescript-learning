import { useState } from "react";
import { AuthUser } from "../Types/AuthUser";

// User component definition, managing user authentication state
export const User = () => {
  // state variable to track authenticated user, initialized to null, type AuthUser or null, useState hook
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // previously <AuthUser | null> null, now initialized with type assertion
  const handleLogin = () => {
    setUser({
      name: "Wate",
      email: "Wate@example.com",
    });
  };

  /* const handleLogout = () => {
    setUser(null);
  }; */

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
