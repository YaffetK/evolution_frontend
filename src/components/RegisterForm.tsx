import React, { useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  lastName: string;
} & (MaleProps | FemaleProps);

type MaleProps = {
  gender: "male";
  salary?: number;
  age?: number;
};

type FemaleProps = {
  gender: "female";
  weight?: number;
};

const RegisterForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    gender: "female",
    name: "",
    lastName: "",
    password: "",
    email: "",
  });

  const handleSubmit = () => {
    alert("hello");
  };
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <form
        onSubmit={handleSubmit}
        className="relative grid p-5 gap-5 md:grid-cols-2 w-2/4 sm:grid-cols-1 h-1/2 items-center justify-center border border-red-500 bg-gray-300"
      >
        <h3 className="absolute top-0 left-1/3 font-mono">
          Enter your credentials:
        </h3>
        <div className="flex flex-col items-start p-5">
          <label className="text-black font-bold" htmlFor="name">
            {" "}
            Name:
          </label>
          <input
            placeholder="type your name"
            type="text"
            className=" w-72"
            id="name"
            value={user?.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </div>
        <div className="flex flex-col p-5 items-start">
          <label className="text-black font-bold" htmlFor="lastName">
            {" "}
            LastName:
          </label>
          <input
            placeholder="type your lastName"
            className=" w-72"
            type="text"
            id="lastName"
            value={user?.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          ></input>
        </div>
        <div className="flex flex-col items-start p-5">
          <label className="text-black font-bold" htmlFor="age">
            {" "}
            Age:
          </label>
          <input
            className="w-72"
            id="age"
            type="text"
            value={user?.age}
            onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
          ></input>
        </div>
        <div className="flex flex-col items-start p-5">
          <label className="text-black font-bold" htmlFor="email">
            {" "}
            Email:
          </label>
          <input
            placeholder="Type your email"
            className="w-72"
            id="email"
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </div>
        <div className="flex flex-col p-5 items-start">
          <label className="text-black font-bold" htmlFor="password">
            {" "}
            Password:
          </label>
          <input
            placeholder="type your password"
            className=" w-72"
            type="password"
            id="password"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </div>

        <button
          type="submit"
          className="flex my-5 bg-blue text-white w-44 justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
