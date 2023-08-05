import React from "react";
import "./Settings.css";

const Settings = ({
  handleIncreaseSpeed,
  handleDecreaseSpeed,
  handleColorChange,
}) => {
  return (
    <div className="settings-btns">
      <button className="set-btn mins" onClick={handleDecreaseSpeed}>
        Decrease Speed
      </button>
      <button className="set-btn color" onClick={handleColorChange}>
        Change Color
      </button>
      <button className="set-btn plus" onClick={handleIncreaseSpeed}>
        Increase Speed
      </button>
    </div>
  );
};

export default Settings;
