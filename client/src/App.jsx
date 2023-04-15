import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { Routes, Route, Link } from "react-router-dom";

import { Dashboard, Landing, PageNotFound, Register } from "./pages";

import "./App.css";

//MUI Components
import Paper from "@mui/material/Paper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Paper>
      <div className="App">
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/register">Register</Link>
          <Link to="/landing">Landing</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </Paper>
  );
}

export default App;
