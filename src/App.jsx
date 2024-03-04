import React from "react";
import { Users } from "./data/Users";

const App = () => {
  return (
    <div>
      <div>
        <input 
          type="text"
        />
      </div>
      <div>
        {Users.map(user => (
          <li>{user.first_name}</li>
        ))}
      </div>
    </div>
  )
}

export default App;