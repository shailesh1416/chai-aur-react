import {useState} from "react"

function App() {
  const [color,SetColour]=useState("olive")


  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
            onClick={()=>SetColour("red")}
            className="outline-none px-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"red"}}>Red</button>
            <button 
            onClick={()=>SetColour("green")}
            className="outline-none px-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"green"}}>Green</button>
            <button 
            onClick={()=>SetColour("blue")}
            className="outline-none px-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"blue"}}>Blue</button>
            <button 
            onClick={()=>SetColour("gold")}
            className="outline-none px-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"gold"}}>Gold</button>
            <button 
            onClick={()=>SetColour("black")}
            className="outline-none px-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"black"}}>Black</button>
            <button 
            onClick={()=>SetColour("purple")}
            className="outline-none px-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"purple"}}>Purple</button>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
