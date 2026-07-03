import React from "react";

function Box(props) {
  return <h3 style={{ color: props.color }}>{props.text}</h3>;
}

function App() {
  // 1. simple object
  let data = { color: "red", text: "Hello" };

  // 2. another object
  let data2 = { color: "blue", text: "Hi" };

  // 3. merge objects
  let mix = { ...data, ...data2 };

  return (
    <div>
      {/* 1. spread object as props */}
      <Box {...data} />

      {/* 2. override value */}
      <Box {...data} color="green" />

      {/* 3. default + override */}
      <Box {...{ color: "pink", text: "Default" }} text="Changed" />

      {/* 4. spread style */}
      <p style={{ ...{ color: "purple" }, ...{ fontSize: "20px" } }}>
        Styled Text
      </p>

      {/* 5. spread event */}
      <button {...{ onClick: () => alert("Clicked!") }}>
        Click Me
      </button>

      {/* 6. spread html props */}
      <input {...{ type: "text", placeholder: "Enter name" }} />

      {/* 7. spread merged object */}
      <Box {...mix} />

      {/* 8. clone and change */}
      <Box {...data} text="New Text" />

      {/* 9. forward props */}
      <Wrap {...data} />

      {/* 10. simple spread again */}
      <Box {...data2} />
    </div>
  );
}

function Wrap(props) {
  return <Box {...props} />;
}

export default App;
