import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Search from "./components/Search";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details do not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };

  useEffect(() => {
    const searchData = localStorage.getItem("useDetails");
    setUser(JSON.parse(searchData));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("useDetails", JSON.stringify(user));
  });
  return (
    <div className="App">
      {user.email !== "" ? (
        <>
          <div className="welcome">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
            <button className="btn" onClick={Logout}>
              Logout
            </button>
          </div>
          <Search />
        </>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
