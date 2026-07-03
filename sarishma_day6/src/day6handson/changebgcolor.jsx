import { useState } from "react";

let ColorPicker=()=> {
  let  [color, setColor] = useState("#ffffff");

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Pick a Background Color 🎨</h2>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <p>Selected Color: {color}</p>
    </div>
  );
}

export default ColorPicker;
