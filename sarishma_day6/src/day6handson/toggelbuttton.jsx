import { useState } from "react";

let ToggleButton=()=> {
  let [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default ToggleButton;
