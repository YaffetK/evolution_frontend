import { useState } from "react";
import Navbar from "./components/Navbar.tsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  interface user {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    hobbies: string[];
  }

  const person: user = {
    firstName: "Yaffet",
    lastName: "Kahsay",
    email: "yaffet@gmail.com",
    age: 26,
    hobbies: ["soccer", "One Piece", "Positivity"],
  };

  const list: string[] = [...person.hobbies];

  return (
    <div className="bg-beige w-full h-full">
      <header>
        <Navbar />
      </header>
      <div className="">{person.firstName}</div>

      {list[0]}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
