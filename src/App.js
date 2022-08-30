/** @format */

import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <div className="u-full-width">
        <div className="row">
          <div className="three columns">
            <div className="authentication">
              <LoginForm />
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
