import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (event) => {
    event.preventDefault();

    const registeredUser = {
      email,
      password,
    };
    fetch("http://localhost:PORT/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(registeredUser),
    })
      .then((response) => {
        setIsLoggedIn(true);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="email"
        />
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="password"
        />

        <button onClick={loginHandler} className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
