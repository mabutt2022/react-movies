import { useState } from "react";

export default function LoginPage(props) {
  const [username, setUsername] = useState({
    username: ""
  });

  function handleUserChange(e) {
    const inputName = e.target.name;
    const currentValue = e.target.value;
    setUsername({ [inputName]: currentValue });
  }

  function addUser(e) {
    e.preventDefault();
    props.userlogon(username);
  };

  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title"> Enter Username</h3>
        <form onSubmit={addUser}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Your Username"
              name="username"
              value={username.username}
              onChange={handleUserChange} />
            <br />
          </div>
          <button className="login-button">Sign In</button>
        </form>
      </div>

    </div>
  );
}