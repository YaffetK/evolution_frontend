import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

const LoginPage: React.FC = () => {
  function merge<T, U>(objA: T, objB: U) {
    return { ...objA, objB };
  }

  const mergedObj = merge({ name: "Yaffet" }, { age: 26 });
  console.log(`mergedObj is => ${mergedObj.name}`);

  return (
    <div className="bg-gradient-to-b from-slate-blue-light to-slate-blue-dark w-screen h-screen box-border flex flex-col ">
      <Navbar />
      <div className="flex items-center justify-center h-full w-full ">
        <div className="w-full">
          <Button className="bg-red-500 w-1/2 hover:bg-black">Click me</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
