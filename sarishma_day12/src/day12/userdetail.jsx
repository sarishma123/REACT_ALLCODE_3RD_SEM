import { useNavigate, useParams } from "react-router"

const Userdetails = () => {
  let {userid}=useParams()
  let navigate =useNavigate()
  let goTohome = () => {
    navigate("/", {
      state: "data from the user details page",
    })
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {userid}</p>
      <button onClick={goTohome}>Go to Home</button>

    </div>
  )
}

export default Userdetails