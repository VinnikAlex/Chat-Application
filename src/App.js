/** @format */

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="u-full-width">
        <div className="row">
          <div className="three columns">
            <div className="authentication">
              <button class="button-primary">Login</button>
              <button class="button-primary">Register</button>
            </div>
            <div className="conversation">
              {/* <input className="u-full-width" placeholder="Search..."></input> */}
              <div className="tempdiv"></div>
              {/* fetch your conversations here: */}
              {/* <div>
                {units.map((unit) => (
                  <li key={unit.id}>
                    {" "}
                    {unit.id} - {unit.code} - {unit.title} - {unit.offering}
                    <button value={unit.id} onClick={handleUnitDeletion}>
                      Delete
                    </button>
                  </li>
                ))}
              </div> */}
            </div>
            <button class="button-primary">Sign Out</button>
          </div>
          <div className="nine columns">
            <h1>Hello nine column</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
