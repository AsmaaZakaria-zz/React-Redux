import React, { useState } from "react";

import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("Posts");

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("Posts")}>
          Posts
        </button>
        <button onClick={() => setResource("Todos")}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  )
}

export default App;
