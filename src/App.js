import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="Header">
          <h1>Application Name</h1>
          <p>Login</p>
        </div>
        <br />
        <input
          className="sub-codetea"
          type="text"
          id="codetea"
          name="fname"
          defaultValue="CODETEA.COM"
        />
        <br />
        <br />
        <input
          type="text"
          id="password"
          name="password"
          defaultValue="Password"
        />
        <br />
        <button className="MainBtn">SIGN IN</button>
      </div>
      <div className="subMain">
        <p>2025-Hsa Moo Moo</p>
        <button>Login error!</button>
      </div>
    </div>
  );
}

export default App;
