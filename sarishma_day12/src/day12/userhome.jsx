import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Userhome = () => {
  const location = useLocation();
  const [user, setUser] = useState([]);

  let data = location.state?.data || "no data is received";

  const fetchuser = async () => {
    let res = await axios("https://jsonplaceholder.typicode.com/users");
    console.log("fetch user data:", res.data);
    setUser(res.data);
  };

  useEffect(() => {
    fetchuser();
  }, []);

  let navigate = useNavigate();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "teal",
        color: "white",
        borderRadius: "14px",
        margin: "10px",
      }}
    >
      <h1>User Home</h1>

      <p><strong>Received Data:</strong> {data}</p>

      <ul>
        {user.map((u) => (
          <div
            key={u.id}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/userid/${u.id}`);
            }}
          >
            <li>Name: {u.name}</li>
            <li>Email: {u.email}</li>
            <li>Phone: {u.phone}</li>
            <li>Street: {u.address.street}</li>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Userhome;