/** @format */

import "./App.css";

function App() {
  const register = (e) => {
    e.preventDefault();

    console.log("Button clicked", e.target);
  };

  return (
    <div className="App">
      <div className="u-full-width">
        <div className="row">
          <div className="three columns">
            <div className="authentication">
              <form onSubmit>
                <input></input>
                <button class="button-primary">Login</button>
                <input></input>
                <button class="button-primary">Register</button>
              </form>
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
