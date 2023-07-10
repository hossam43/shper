import React from "react";
import ThreeScene from "./ThreeScene";
import "./App.css";
import Header from "./components/Header";
import Settings from "./components/Settings";
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Settings></Settings>
      <ThreeScene />
    </div>
  );
}

export default App;
