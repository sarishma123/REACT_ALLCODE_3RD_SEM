import React, { useState } from "react";

function EventExamples() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [message, setMessage] = useState("");
  const [likes, setLikes] = useState(0);
  const [hoverText, setHoverText] = useState("Hover over me");

  // 6. Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      {/* 1. Alert button */}
      <button onClick={() => alert("Button clicked!")}>Show Alert</button>

      <hr />

      {/* 2. Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <hr />

      {/* 3. Real-time input */}
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typed Text: {text}</p>

      <hr />

      {/* 4. Toggle message */}
      <button onClick={() => setShow(!show)}>Toggle Message</button>
      {show && <p>Hello React! 👋</p>}

      <hr />

      {/* 5. Change background color */}
      <button onClick={() => setBgColor("lightyellow")}>
        Change Background Color
      </button>

      <hr />

      {/* 6. Form submission */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" />
        <button type="submit">Submit Form</button>
      </form>

      <hr />

      {/* 7. Multiple buttons for messages */}
      <button onClick={() => setMessage("Hello!")}>Say Hello</button>
      <button onClick={() => setMessage("Goodbye!")}>Say Goodbye</button>
      <button onClick={() => setMessage("Welcome!")}>Say Welcome</button>
      <p>Message: {message}</p>

      <hr />

      {/* 8. Like button */}
      <button onClick={() => setLikes(likes + 1)}>👍 Like ({likes})</button>

      <hr />

      {/* 9. Mouse over/out event */}
      <h3
        onMouseOver={() => setHoverText("Mouse is over!")}
        onMouseOut={() => setHoverText("Hover over me")}
      >
        {hoverText}
      </h3>

      <hr />

      {/* 10. Log event object */}
      <button onClick={(e) => console.log("Event Object:", e)}>
        Log Event Object
      </button>
    </div>
  );
}

export default EventExamples;
