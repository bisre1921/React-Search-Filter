import React, { useState } from "react";
import { Users } from "./data/Users";
import Page from "./Page";

const App = () => {
  const [searchQuery , setSearchQuery] = useState("");

  const searchKeys = ["first_name" , "last_name" , "email"];

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const searchFunction = (user) => {
    return user.filter((item) => 
      searchKeys.some((searchKey) => item[searchKey].toLowerCase().includes(searchQuery))
    );
  }    
  return (
    <div>
      <div>
        <input 
          type="text"
          onChange={handleInputChange}
          className="border-4"
        />
      </div>
      <div>
          <Page user={searchFunction(Users)}/>
      </div>  
    </div>
  )
}

export default App;