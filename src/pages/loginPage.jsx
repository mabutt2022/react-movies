import { useState } from "react";

export default function LoginPage(props) {
const [username, setUsername] = useState({ 
  username: "" });

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
      <div>
        Login Page
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input 
          type="text"
          placeholder="Your Username"
          name="username" 
          value={username.username}
          onChange={handleUserChange}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }