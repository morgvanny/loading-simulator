import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Profile from "./Profile";

function App() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2500);
  }, []);

  return <div className="App">{done ? <Profile /> : <Loading />}</div>;
}

export default App;
