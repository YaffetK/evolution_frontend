import LoginForm from "@/components/LoginForm";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { merge } from "@/lib/utils";

const LoginPage = () => {
  const mergedObj = merge({ name: "Yaffet" }, { age: 26 });
  console.log(`mergedObj is => ${mergedObj.name}`);

  return (
    <div className="bg-gradient-to-b from-slate-blue-light to-slate-blue-dark w-screen h-screen box-border flex flex-col mx-auto p-4 min-w-min ">
      <div className="mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
