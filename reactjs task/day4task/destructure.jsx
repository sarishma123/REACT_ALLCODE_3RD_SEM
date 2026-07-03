

/* 1. Destructure name and age from props in function parameters */
function Profile({ name, age }) {
  return <p>{name} - {age}</p>;
}

/* 2. Destructure nested props */
function UserInfo({ user: { name, email } }) {
  return <p>{name} | {email}</p>;
}

/* 3. Destructure state array */
function Counter() {
  let [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

/* 4. Destructure props inside function body */
function Card(props) {
  let { title } = props;
  return <h3>{title}</h3>;
}

/* 5. Destructure only needed props and use rest */
function Button({ text, ...rest }) {
  return <button {...rest}>{text}</button>;
}

/* 6. Destructure props with default values */
function Avatar({ size = 40, shape = "circle" }) {
  return <img width={size} className={shape} />;
}

/* 7. Destructure event object in handler */
function InputBox() {
  function handleChange({ target: { value } }) {
    console.log(value);
  }

  return <input onChange={handleChange} />;
}

/* 8. Destructure multiple state variables */
function UserForm() {
  let [name, setName] = useState("");
  let [age, setAge] = useState(0);

  return (
    <>
      <input onChange={e => setName(e.target.value)} />
      <input onChange={e => setAge(e.target.value)} />
    </>
  );
}

/* 9. Destructure array returned from custom hook */
function useFetch(url) {
  return ["data", true, null];
}

function FetchComponent() {
  let [data, loading, error] = useFetch("/api");
  return <p>{loading ? "Loading..." : data}</p>;
}

/* 10. Child → GrandChild props */
function GrandChild({ name }) {
  return <p>{name}</p>;
}

function Child({ name }) {
  return <GrandChild name={name} />;
}


