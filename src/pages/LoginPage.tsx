import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-blue-light to-slate-blue-dark w-screen h-screen box-border flex flex-col ">
      <Navbar />
      <div className="flex items-center justify-center h-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
