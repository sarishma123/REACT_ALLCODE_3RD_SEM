import React, { useState } from 'react';

/* 1. Destructure name and age from props in function parameters */
function Profile({ name, age }) {
  return <p><strong>Profile:</strong> {name} - {age} years old</p>;
}

/* 2. Destructure nested props */
function UserInfo({ user: { name, email } }) {
  return <p><strong>User Info:</strong> {name} | {email}</p>;
}

/* 3. Destructure state array */
function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p><strong>Counter:</strong> {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

/* 4. Destructure props inside function body */
function Card(props) {
  let { title } = props;
  return <h3>Card: {title}</h3>;
}

/* 5. Destructure only needed props and use rest */
function Button({ text, ...rest }) {
  return <button {...rest}>{text}</button>;
}

/* 6. Destructure props with default values */
function Avatar({ size = 40, shape = "circle" }) {
  return <img width={size} alt="avatar" style={{ borderRadius: shape === "circle" ? "50%" : "5px" }} />;
}

/* 7. Destructure event object in handler */
function InputBox() {
  const [value, setValue] = useState("");
  
  function handleChange({ target: { value } }) {
    setValue(value);
    console.log(value);
  }

  return (
    <div>
      <input onChange={handleChange} placeholder="Type here..." />
      <p>Input value: {value}</p>
    </div>
  );
}

/* 8. Destructure multiple state variables */
function UserForm() {
  let [name, setName] = useState("");
  let [age, setAge] = useState(0);

  return (
    <div>
      <h4>User Form:</h4>
      <input 
        placeholder="Name" 
        value={name}
        onChange={e => setName(e.target.value)} 
      />
      <input 
        placeholder="Age" 
        type="number"
        value={age}
        onChange={e => setAge(e.target.value)} 
      />
      <p>Name: {name}, Age: {age}</p>
    </div>
  );
}

/* 9. Destructure array returned from custom hook */
function useFetch(url) {
  return ["Sample Data", false, null];
}

function FetchComponent() {
  let [data, loading, error] = useFetch("/api");
  return <p><strong>Fetch Result:</strong> {loading ? "Loading..." : data}</p>;
}

/* 10. Child → GrandChild props */
function GrandChild({ name }) {
  return <p>GrandChild received: {name}</p>;
}

function Child({ name }) {
  return <GrandChild name={name} />;
}

export default function DestructureTask() {
  return (
    <div>
      <h2>Destructuring Examples</h2>
      
      <Profile name="Alice" age={25} />
      <hr />
      
      <UserInfo user={{ name: "Bob", email: "bob@example.com" }} />
      <hr />
      
      <Counter />
      <hr />
      
      <Card title="My Card" />
      <hr />
      
      <Button text="Custom Button" onClick={() => alert("Button clicked!")} />
      <hr />
      
      <Avatar size={50} shape="circle" />
      <hr />
      
      <InputBox />
      <hr />
      
      <UserForm />
      <hr />
      
      <FetchComponent />
      <hr />
      
      <Child name="John Doe" />
    </div>
  );
}
