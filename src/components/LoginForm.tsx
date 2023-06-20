import React, { useTransition } from "react";
import { useState } from "react";
import axios from "axios";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type User = {
  email: string;
  password: string;
};
const LoginForm: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  async function handleLogin(data: User): Promise<User> {
    try {
      const res = await axios.post("https:localhost:8080/auth/login", data);

      if (res.status === 200) {
        const user: User = res.data;
        return user;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      throw new Error("An error occured during login");
    }
  }

  function handleSubmit(): void {
    console.log(user);
    handleLogin(user)
      .then((response) => {
        console.log(response.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex flex-row w-2/3 h-[700px] bg-lblue justify-center items-center box-border shadow-2xl rounded-2xl max-w-4xl">
      <div className="flex flex-col w-3/5 h-full bg-gray-500 relative justify-center">
        <p className=" absolute top-20 left-10 text-blue-gradient text-xl">
          {" "}
          Evolution
        </p>
        <form className="flex flex-col w-full p-10 bg-white items-center">
          <div className="flex w-full justify-evenly h-16">
            <div className="p-2 h-10 ">
              <FcGoogle />
            </div>
            <div className="p-2">
              <FaGithub />
            </div>
            <div className="p-2">
              <FaFacebook />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            className="h-8 rounded"
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            className="h-8 rounded"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>

          <button
            className="bg-blue text-white mt-5 w-1/2"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>

      {/*  */}
      <div className=" flex flex-col relative w-2/5 h-full bg-gray-700 rounded-tr-2xl rounded-br-2xl">
        {/*Sign up section */}
        <p className="absolute bottom-0 left-20 text-white">
          Har du inget konto? tryck här
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
