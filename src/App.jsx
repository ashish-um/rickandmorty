import React from "react";
import Characters from "./components/Characters";
import Character from "./components/Character";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/:id" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/search/" element={<Characters />} />

          <Route path="*" element={<h1>No Page Found!</h1>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
