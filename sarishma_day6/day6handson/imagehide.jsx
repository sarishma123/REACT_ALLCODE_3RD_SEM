import { useState } from "react";

let ToggleImage=()=> {
  let [showImage, setShowImage] = useState(true);

  return (
    <div>
      <button onClick={() => setShowImage(!showImage)}>
        {showImage ? "Hide Image" : "Show Image"}
      </button>

      {showImage && (
        <img
          src="https://via.placeholder.com/300"
          alt="Example"
          style={{ marginTop: "10px" }}
        />
      )}
    </div>
  );
}

export default ToggleImage;
