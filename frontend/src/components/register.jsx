import { React, useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  //FUNCTIONS

  function submitHandler(event) {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    fetch("http://localhost:8765/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        setIsRegistered(true);
      })
      .catch((err) => console.error(err));

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={submitHandler}>Register</button>
      </form>

      {isRegistered && <p>The user was registered!</p>}
    </div>
  );
};

export default Register;
