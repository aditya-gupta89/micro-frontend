import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RemoteA from "remoteA/App";
import RemoteB from "remoteB/App";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      This is Host application
      <section>
        <RemoteA />
      </section>
      <section>
        <RemoteB />
      </section>
    </>
  );
}

export default App;
