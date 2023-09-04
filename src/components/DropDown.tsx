import { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const DropDown = () => {
  const [isOpen, setIsopen] = useState(false);

  return (
    // <div className="flex flex-col h-16 w-40 bg-black justify-center items-center rounded-md">
    //   <button
    //     onClick={() => setIsopen(!isOpen)}
    //     className="flex bg-gray-400 p-5 rounded-md w-full h-full hover:bg-yellow-500 items-center justify-center"
    //   >
    //     <p className="text-white px-2">Dropdown</p>
    //     <BsFillArrowDownCircleFill />
    //   </button>

    //   {isOpen && (
    //     <div className="bg-white z-10 w-full flex-grow rounded-sm">
    //       <ul className="">
    //         {options.map((item) => {
    //           return <li className="hover:bg-blue px-2 py-1">{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   )}
    // </div>

    <DropdownMenu>
      <DropdownMenuTrigger>Profle</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
