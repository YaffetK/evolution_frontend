import { Routes, Route } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/LoginPage.tsx";
import About from "./pages/About.tsx";
import Profile from "./pages/Profile.tsx";
import Register from "./pages/Register.tsx";

function App() {
  return (
    <div className="bg-beige w-screen box-border ">
      <Routes>
        {/* <header>
          <Navbar />
        </header> */}

        {/* <main className="bg-white w-full h-full box-border flex flex-col justify-center items-center ">
          <LoginForm />
        </main> */}

        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
