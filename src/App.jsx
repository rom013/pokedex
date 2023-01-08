import { BrowserRouter, Routes, Route} from "react-router-dom"
import DataPokemon from "./pages/dataPokemon"
import Home from "./pages/home"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/data/:name" element={<DataPokemon/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App