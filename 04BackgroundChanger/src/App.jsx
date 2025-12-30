import { useState } from 'react'

function App() {
  const [ color , setColor ] = useState("purple");

  return (
    <div className="w-full h-screen transition-all duration-300"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center top-8 px-4 inset-x-0">
        <div className="flex flex-wrap justify-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
          
          <button onClick={() => setColor("purple")} className="outline-none  px-4 py-2 font-bold rounded-full shadow-xl text-white cursor-pointer"
          style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("green")}  className="outline-none  px-4 py-2 font-bold rounded-full shadow-xl text-white cursor-pointer"
          style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")}  className="outline-none  px-4 py-2 font-bold rounded-full shadow-xl text-white cursor-pointer"
          style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("orange")}  className="outline-none px-4 py-2 font-bold rounded-full shadow-xl cursor-pointer"
          style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => setColor("white")}  className="outline-none  px-4 py-2 font-bold rounded-full shadow-xl cursor-pointer"
          style={{backgroundColor: "white"}}>white</button>
          <button onClick={() => setColor("black")}  className="outline-none  px-4 py-2 font-bold rounded-full shadow-xl text-white cursor-pointer"
          style={{backgroundColor: "black"}}>black</button>
          <button onClick={() => setColor("pink")}  className="outline-none  px-4 py-2 font-bold rounded-full shadow-xl cursor-pointer"
          style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("yellow")}  className="outline-none px-4 py-2 font-bold rounded-full shadow-xl cursor-pointer"
          style={{backgroundColor: "yellow"}}>Yellow</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
