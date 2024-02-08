import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App1 from "./components/App1.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/App1" element={<App1 />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
