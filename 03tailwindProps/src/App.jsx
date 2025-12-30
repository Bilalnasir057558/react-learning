import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  const array = [1, 2, 3];

  return (
    <>
      <h1 className="bg-purple-400 text-black rounded-xl p-3 mb-4">TailwindCSS</h1>
      <Card title="Creative Designs" btnText="Visit us"/>
      <Card title="Modern Pakistani Architecture" btnText="Learn More" />
      <Card />
    </>
  );
}

export default App;
