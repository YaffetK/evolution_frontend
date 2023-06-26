import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import LoginForm from "./components/LoginForm.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import About from "./pages/About.tsx";

function App() {
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
    <div className="bg-beige w-screen h-screen box-border ">
      <Routes>
        {/* <header>
          <Navbar />
        </header> */}

        {/* <main className="bg-white w-full h-full box-border flex flex-col justify-center items-center ">
          <LoginForm />
        </main> */}

        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
