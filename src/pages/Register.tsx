import React from "react";
import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";

const Register: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
