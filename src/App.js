import React, { useState, useEffect } from "react";
import axios from "axios";
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
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("no match");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await axios.get("https://www.bing.com");

      console.log(response.data);
    };
    fetchCustomer();
  }, []);
  return (
    <div className="App">
      {user.email !== "" ? (
        <>
          <div className="welcome">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
            <Search />
          </div>
        </>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
