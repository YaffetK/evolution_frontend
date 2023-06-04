import React from "react";
import { useState } from "react";
import axios from "axios";

const LoginForm: React.FC = () => {
  interface User {
    email: string;
    password: string;
  }

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  async function handleSubmit(data: User): Promise<User> {
    const res = await axios.post("https://localhost:8080/auth/login", data);
    const user: User = res.data;
    return user;
  }

  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>

        <button onClick={handleSubmit(user)}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
