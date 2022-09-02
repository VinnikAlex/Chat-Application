/** @format */

import { useState } from "react";
import Register from "./RegisterForm";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <div className="u-full-width">
        <div className="row">
          <div className="four columns">
            <div className="authentication">
              <Register user={user} setUser={setUser} />
              {/* <Conversations userToken={newUserToken} /> */}
            </div>
            <div className="conversations">
              <div>Conversations:</div>
            </div>
          </div>
          <div className="eight columns">
            <div className="messages">
              <div>Messages:</div>
            </div>
            <div className="textbox">Type Messages Here:</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
