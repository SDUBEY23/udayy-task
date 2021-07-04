import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={submitHandler}>
        <h1>Login</h1>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <input className="submit-btn" type="submit" value="LOGIN" />
      </form>
    </div>
  );
}

export default LoginForm;
