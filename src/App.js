import React from "react";

// TODO: Import Profile component
import Profile from "./Profile";


function App() {
   return ( 
      <Profile
         name="Li Chen"
         homeAddress = {{
            street: "101 Main",
            city: "Denver",
            state: "CO",
            zip: "80014"
         }}
         workAddress={{
            street: "2000 Central",
            city: "Aurora",
            state: "CO",
            zip: "80010"
         }}
      />
   );    
}

export default App;