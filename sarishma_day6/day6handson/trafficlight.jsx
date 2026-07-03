import { useState } from "react";

let TrafficLight=()=> {
  let lights = ["red", "yellow", "green"];
  let [current, setCurrent] = useState(0);

  const nextLight = () => {
    setCurrent((current + 1) % lights.length);
  };

  let  lightStyle = (color) => ({
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    margin: "10px auto",
    backgroundColor: lights[current] === color ? color : "#ccc"
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: "120px", padding: "10px", background: "#333" }}>
        <div style={lightStyle("red")} />
        <div style={lightStyle("yellow")} />
        <div style={lightStyle("green")} />
      </div>

      <button onClick={nextLight} style={{ marginTop: "15px" }}>
        Change Light
      </button>
    </div>
  );
}

export default TrafficLight;
