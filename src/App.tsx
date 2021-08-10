import { Todos } from "./Components/Todos"
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div className="App h-screen flex  p-6 items-center justify-center flex-col bg-gradient-to-r from-green-100 to-blue-100">
         <h1 className=" text-center mb-4  font-extrabold text-gray-600 font-4xl "> Todos</h1>
     <Todos />
    </div>
  )
}

export default App