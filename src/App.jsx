import { useState } from "react";
import Background from "./components/background";
import Foreground from "./components/foreground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-zinc-900 font-montserrat ">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
