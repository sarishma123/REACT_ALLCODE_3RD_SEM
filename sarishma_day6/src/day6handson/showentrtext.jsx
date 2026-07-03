import { useState } from "react";

let TextInputApp=()=> {
  let [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default TextInputApp;
