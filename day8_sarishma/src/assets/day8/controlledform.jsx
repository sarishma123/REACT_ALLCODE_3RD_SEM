import { useState } from "react";

const Controlledform = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [age, setAge] = useState("");
    const [ageError, setAgeError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (email === "") {
            setEmailError("Email is required");
            return;
        }

        if (age < 17) {
            setAgeError("Age must be at least 17");
            return;
        }

        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            return;
        }

        alert(`fullname: ${fullName}\nemail: ${email}\nage: ${age}`);

        // reset form
        setFullName("");
        setEmail("");
        setAge("");
        setPassword("");

        setEmailError("");
        setAgeError("");
        setPasswordError("");
    };

    return (
        <div>
            <h3>Controlled Form</h3>

            <form onSubmit={handleFormSubmit}>

                <div className="form-fill">
                    <label>Fullname:</label>
                    <input
                        type="text"
                        placeholder="enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        minLength={3}
                    />
                </div>

                <div className="form-fill">
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                        <p style={{ color: "red" }}>{emailError}</p>
                    )}
                </div>

                <div className="form-fill">
                    <label>Age:</label>
                    <input
                        type="number"
                        placeholder="enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        min={17}
                    />
                    {ageError && (
                        <p style={{ color: "red" }}>{ageError}</p>
                    )}
                </div>

                <div className="form-fill">
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={8}
                    />
                    {passwordError && (
                        <p style={{ color: "red" }}>{passwordError}</p>
                    )}
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default Controlledform;