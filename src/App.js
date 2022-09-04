/** @format */

import { useState } from "react";
import Register from "./RegisterForm";
import Messages from "./Messages";

function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <div className="App">
        <div className="u-full-width">
          <div className="row">
            <div className="four columns">
              <div className="authentication">
                <Register user={user} setUser={setUser} />
                {/* <Conversations userToken={newUserToken} /> */}
              </div>
            </div>
            <div className="eight columns">
              <Messages newUserToken={localStorage.getItem("token")} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="u-full-width">
          <div className="row">
            <div className="four columns">
              <div className="authentication">
                <Register user={user} setUser={setUser} />
                {/* <Conversations userToken={newUserToken} /> */}
              </div>
            </div>
            <div className="eight columns"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
