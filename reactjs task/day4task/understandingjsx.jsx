

function JSXExamples() {
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
      {/* 1. Header with logo and navigation links */}
      <header>
        <img src="/logo.png" alt="Logo" width="50" />
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> |{" "}
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* 2. List of 5 fruits */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* 3. Conditional message using ternary operator */}
      <h3>{isLoggedIn ? "Welcome User!" : "Please Login"}</h3>

      {/* 4. JavaScript expression in JSX */}
      <p>You have {items.length} items</p>

      {/* 5. Inline styles using object */}
      <p style={styleObj}>This text has inline styles</p>

      {/* 6. Self-closing input tag */}
      <input type="text" placeholder="Enter your name" />

      {/* 7. React Fragment example */}
      <>
        <h4>Fragment Heading</h4>
        <p>This is inside a fragment</p>
      </>

      {/* 8. JSX comment example */}
      {/* This is a JSX comment */}

      {/* 9. Table with 3 rows and 2 columns */}
      <table border="1" style={{ marginTop: "10px" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Age</td>
          </tr>
          <tr>
            <td>Ram</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Sita</td>
            <td>22</td>
          </tr>
        </tbody>
      </table>

      {/* 10. Display current date */}
      <p>Today is: {new Date().toLocaleDateString()}</p>
    </>
  );
}

export default JSXExamples;
