function errorExamples() {
  try {
    undefinedFunction();
  } catch (error) {
    console.log("Undefined Function Error:", error.message);
  }

  try {
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("Cannot divide by zero");
    }
  } catch (error) {
    console.log("Division Error:", error.message);
  }

  try {
    throw new Error("This is a custom error message");
  } catch (error) {
    console.log("Custom Error:", error.message);
  }

  try {
    JSON.parse("{ invalidJson: true }");
  } catch (error) {
    console.log("JSON Error Name:", error.name);
  } finally {
    console.log("Finally block executed");
  }
}

function multipleCatchMessages(value) {
  try {
    if (typeof value !== "number") {
      throw new TypeError("Value must be a number");
    }
    if (value < 0) {
      throw new RangeError("Value must be positive");
    }
    console.log("Valid value:", value);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Type Error:", error.message);
    } else if (error instanceof RangeError) {
      console.log("Range Error:", error.message);
    } else {
      console.log("Unknown Error:", error.message);
    }
  }
}

async function asyncTryCatchExample() {
  try {
    const data = await Promise.reject(new Error("Async error occurred"));
    console.log(data);
  } catch (error) {
    console.log("Async Catch:", error.message);
  }
}

errorExamples();
multipleCatchMessages("abc");
multipleCatchMessages(-5);
multipleCatchMessages(10);
asyncTryCatchExample();
