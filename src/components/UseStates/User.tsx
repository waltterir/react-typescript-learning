import { useState } from "react";

// User component managing user state with login and logout functionality
type AuthUser = {
  name: string;
  email: string;
};

// User component definition, managing user authentication state
export const User = () => {
  // state variable to track authenticated user, initialized to null, type AuthUser or null
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Wate",
      email: "Wate@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
