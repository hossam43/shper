import React, { useState } from "react";
import ThreeScene from "../components/ThreeScene";
import Settings from "../components/Settings";
import tinycolor from "tinycolor2";
import "./App.css";
function App() {
  const [speedValue, setSpeedValue] = useState(5);
  const [colorValue, setColorValue] = useState("#35bdb0");

  const handleIncreaseSpeed = () => {
    setSpeedValue((prevSpeed) => prevSpeed + 5);
    console.log(speedValue);
  };

  const handleDecreaseSpeed = () => {
    setSpeedValue((prevSpeed) => prevSpeed - 5);
    console.log(speedValue);
  };

  const handleColorChange = () => {
    // Generate a new color with an increased hue
    const newColor = tinycolor(colorValue).spin(30).toString();
    setColorValue(newColor);
    console.log(colorValue);
  };
  return (
    <div className="container">
      <Settings
        handleIncreaseSpeed={handleIncreaseSpeed}
        handleDecreaseSpeed={handleDecreaseSpeed}
        handleColorChange={handleColorChange}
      ></Settings>
      <ThreeScene speedValue={speedValue} colorValue={colorValue} />
    </div>
  );
}

export default App;
