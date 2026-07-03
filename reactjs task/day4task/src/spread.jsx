import React from "react";

function Box(props) {
  return <h3 style={{ color: props.color }}>{props.text}</h3>;
}

function Wrap(props) {
  return <Box {...props} />;
}

export default function SpreadTask() {
  // 1. simple object
  let data = { color: "red", text: "Hello" };

  // 2. another object
  let data2 = { color: "blue", text: "Hi" };

  // 3. merge objects
  let mix = { ...data, ...data2 };

  return (
    <div>
      <h2>Spread Operator Examples</h2>

      {/* 1. spread object as props */}
      <div>
        <h4>1. Spread object as props:</h4>
        <Box {...data} />
      </div>

      <hr />

      {/* 2. override value */}
      <div>
        <h4>2. Override value:</h4>
        <Box {...data} color="green" />
      </div>

      <hr />

      {/* 3. default + override */}
      <div>
        <h4>3. Default + override:</h4>
        <Box {...{ color: "pink", text: "Default" }} text="Changed" />
      </div>

      <hr />

      {/* 4. spread style */}
      <div>
        <h4>4. Spread style:</h4>
        <p style={{ ...{ color: "purple" }, ...{ fontSize: "20px" } }}>
          Styled Text
        </p>
      </div>

      <hr />

      {/* 5. spread event */}
      <div>
        <h4>5. Spread event:</h4>
        <button {...{ onClick: () => alert("Clicked!") }}>
          Click Me
        </button>
      </div>

      <hr />

      {/* 6. spread html props */}
      <div>
        <h4>6. Spread HTML props:</h4>
        <input {...{ type: "text", placeholder: "Enter name" }} />
      </div>

      <hr />

      {/* 7. spread merged object */}
      <div>
        <h4>7. Spread merged object:</h4>
        <Box {...mix} />
      </div>

      <hr />

      {/* 8. clone and change */}
      <div>
        <h4>8. Clone and change:</h4>
        <Box {...data} text="New Text" />
      </div>

      <hr />

      {/* 9. forward props */}
      <div>
        <h4>9. Forward props:</h4>
        <Wrap {...data} />
      </div>

      <hr />

      {/* 10. simple spread again */}
      <div>
        <h4>10. Simple spread again:</h4>
        <Box {...data2} />
      </div>
    </div>
  );
}
