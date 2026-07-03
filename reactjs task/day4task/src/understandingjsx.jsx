import React from 'react';

export default function JSXTask() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  const items = ["Pen", "Book", "Laptop"];

  const styleObj = {
    color: "blue",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const isLoggedIn = true;

  return (
    <>
      <h2>Understanding JSX Examples</h2>

      {/* 1. Header with logo and navigation links */}
      <div>
        <h4>1. Header with navigation:</h4>
        <header style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "5px" }}>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect fill='%23667eea' width='50' height='50'/%3E%3C/svg%3E" alt="Logo" width="50" />
          <nav style={{ marginTop: "10px" }}>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
          </nav>
        </header>
      </div>

      <hr />

      {/* 2. List of 5 fruits */}
      <div>
        <h4>2. List of 5 fruits:</h4>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>

      <hr />

      {/* 3. Conditional message using ternary operator */}
      <div>
        <h4>3. Conditional message:</h4>
        <h3>{isLoggedIn ? "Welcome User!" : "Please Login"}</h3>
      </div>

      <hr />

      {/* 4. JavaScript expression in JSX */}
      <div>
        <h4>4. JavaScript expression:</h4>
        <p>You have {items.length} items</p>
      </div>

      <hr />

      {/* 5. Inline styles using object */}
      <div>
        <h4>5. Inline styles:</h4>
        <p style={styleObj}>This text has inline styles</p>
      </div>

      <hr />

      {/* 6. Self-closing input tag */}
      <div>
        <h4>6. Self-closing input tag:</h4>
        <input type="text" placeholder="Enter your name" />
      </div>

      <hr />

      {/* 7. React Fragment example */}
      <div>
        <h4>7. React Fragment:</h4>
        <>
          <h5>Fragment Heading</h5>
          <p>This is inside a fragment</p>
        </>
      </div>

      <hr />

      {/* 8. JSX comment example */}
      <div>
        <h4>8. JSX Comment Example:</h4>
        {/* This is a JSX comment - it won't be rendered */}
        <p>Comments in JSX are written like this: {/* inline comment */}</p>
      </div>

      <hr />

      {/* 9. Table with 3 rows and 2 columns */}
      <div>
        <h4>9. Table with data:</h4>
        <table border="1" style={{ marginTop: "10px", borderCollapse: "collapse", width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ padding: "10px" }}>Name</td>
              <td style={{ padding: "10px" }}>Age</td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>Ram</td>
              <td style={{ padding: "10px" }}>20</td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>Sita</td>
              <td style={{ padding: "10px" }}>22</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* 10. Display current date */}
      <div>
        <h4>10. Display current date:</h4>
        <p>Today is: {new Date().toLocaleDateString()}</p>
      </div>
    </>
  );
}
