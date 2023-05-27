import { useState } from "react";
import "./styles.css";
import useSetInterval from "./useSetInterval";
export default function App() {
  const [val, setVal] = useState(0);

  useSetInterval({
    cb: () => {
      setVal(val + 1);
    },
    delay: 1000
  });
  return (
    <div className="App">
      {val}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
