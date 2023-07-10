import React from "react";
import "../components/Settings.css";
import { useState } from "react";
const Settings = () => {
  const [setSize, size] = useState(null);
  const handleSize = () => {
    resize;
  };

  const handleColor = () => {};

  return (
    <div className="settings-btns">
      <button className="set-btn mins" onClick={handleSize}>
        Slow Down
      </button>
      <button className="set-btn color" onClick={handleColor}>
        Change Color
      </button>
      <button className="set-btn plus" onClick={handleSize}>
        Increc Speed
      </button>
    </div>
  );
};

export default Settings;
