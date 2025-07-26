import React, { useState } from "react"
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200"
     style={{backgroundColor: color} }
    >
      <div className="fixed flex flex-wrap 
        justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("skyblue")}
          className="outline-none px-4 py-2 rounded-full"
          style={{backgroundColor: "skyblue"}}>"skyblue"
         </button>
         <button
           onClick={() => setColor("#AA336A")}
          className="outline-none px-4 py-2 rounded-full"
          style={{backgroundColor: "#AA336A"}}>"pink"
         </button><button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-2 rounded-full"
          style={{backgroundColor: "yellow"}}>"yellow"
         </button><button
          onClick={() => setColor("teal")}
          className="outline-none px-4 py-2 rounded-full"
          style={{backgroundColor: "teal"}}>"teal"
         </button><button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-2 rounded-full"
          style={{backgroundColor: "green"}}>"green"
         </button><button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-2 rounded-full"
          style={{backgroundColor: "orange"}}>"orange"
         </button><button
          onClick={() => setColor("violet")}
          className="outline-none px-4 py-2 rounded-full"
          style={{backgroundColor: "violet"}}>"violet"
         </button>
         <button
          onClick={() => setColor("crimson")}
          className="outline-none px-4 py-2 rounded-full"
          style={{backgroundColor: "crimson"}}>"crimson"
         </button>
        </div>
      </div>
    </div>
  )
}

export default App
