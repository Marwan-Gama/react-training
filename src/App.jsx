import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App1 from "./components/App1/App1.jsx";
import App2 from "./components/App2/App2.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/App1" element={<App1 />} />
          <Route path="/App2" element={<App2 />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
