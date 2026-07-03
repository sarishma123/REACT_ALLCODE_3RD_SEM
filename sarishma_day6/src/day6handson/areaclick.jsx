import { useState } from "react";

let ClickTracker=() => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h2>Clicks: {count}</h2>

      <div
        onClick={() => setCount(count + 1)}
        style={{
          width: "300px",
          height: "150px",
          border: "2px dashed #333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        Click anywhere in this box
      </div>
    </div>
  );
}

export default ClickTracker;
