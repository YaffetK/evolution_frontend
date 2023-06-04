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
    hobbies: [
      "Football",
      "One Piece",
      "Positivity",
      "Loving",
      "Forex",
      "Programming",
    ],
  };

  const list: string[] = [...person.hobbies];

  return (
    <div className="bg-beige w-full h-full">
      <header>
        <Navbar />
      </header>

      <div className="bg-white w-full h-full">
        <form action="">
          <input type="text" placeholder="email"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
