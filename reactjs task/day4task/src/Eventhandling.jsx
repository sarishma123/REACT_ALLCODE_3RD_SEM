import React, { useState } from "react";

export default function EventhandlingTask() {
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
      <h2>Event Handling Examples</h2>

      {/* 1. Alert button */}
      <div>
        <h4>1. Alert button:</h4>
        <button onClick={() => alert("Button clicked!")}>Show Alert</button>
      </div>

      <hr />

      {/* 2. Counter */}
      <div>
        <h4>2. Counter:</h4>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <hr />

      {/* 3. Real-time input */}
      <div>
        <h4>3. Real-time input:</h4>
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
        />
        <p>Typed Text: {text}</p>
      </div>

      <hr />

      {/* 4. Toggle message */}
      <div>
        <h4>4. Toggle message:</h4>
        <button onClick={() => setShow(!show)}>Toggle Message</button>
        {show && <p>Hello React! 👋</p>}
      </div>

      <hr />

      {/* 5. Change background color */}
      <div>
        <h4>5. Change background color:</h4>
        <button onClick={() => setBgColor("lightyellow")}>
          Change Background Color
        </button>
      </div>

      <hr />

      {/* 6. Form submission */}
      <div>
        <h4>6. Form submission:</h4>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter name" />
          <button type="submit">Submit Form</button>
        </form>
      </div>

      <hr />

      {/* 7. Multiple buttons for messages */}
      <div>
        <h4>7. Multiple buttons for messages:</h4>
        <button onClick={() => setMessage("Hello!")}>Say Hello</button>
        <button onClick={() => setMessage("Goodbye!")}>Say Goodbye</button>
        <button onClick={() => setMessage("Welcome!")}>Say Welcome</button>
        <p>Message: {message}</p>
      </div>

      <hr />

      {/* 8. Like button */}
      <div>
        <h4>8. Like button:</h4>
        <button onClick={() => setLikes(likes + 1)}>👍 Like ({likes})</button>
      </div>

      <hr />

      {/* 9. Mouse over/out event */}
      <div>
        <h4>9. Mouse over/out event:</h4>
        <h3
          onMouseOver={() => setHoverText("Mouse is over!")}
          onMouseOut={() => setHoverText("Hover over me")}
          style={{ cursor: "pointer", padding: "10px", backgroundColor: "#eee", borderRadius: "5px" }}
        >
          {hoverText}
        </h3>
      </div>

      <hr />

      {/* 10. Log event object */}
      <div>
        <h4>10. Log event object (check console):</h4>
        <button onClick={(e) => console.log("Event Object:", e)}>
          Log Event Object
        </button>
      </div>
    </div>
  );
}
