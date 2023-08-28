import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const LoginPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-blue-light to-slate-blue-dark w-screen h-screen box-border flex flex-col ">
      <Navbar />
      <div className="flex items-center justify-center h-full">
        <Form />
      </div>
      <Button className="bg-red-500 w-1/2 hover:bg-black">Click me</Button>
    </div>
  );
};

export default LoginPage;
