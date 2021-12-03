import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(state));
    alert("Login Successful");
    window.location = "/services";
  };

  return (
    <div class="form">
      <form className="formContainer" onSubmit={handleSubmit}>
        <label className="label">Username</label>
        <input
          type="text"
          name="username"
          defaultValue={state.username}
          className="textInput"
          placeholder="Enter your username"
          onChange={handleChange}
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          defaultValue={state.password}
          className="textInput"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
