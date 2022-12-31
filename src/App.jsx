import { useEffect, useState } from "react"
import { Card } from "./components/Box"
function App() {

  const generationList = [
    "?offset=0&limit=151",
    "?offset=151&limit=100",
    "?offset=251&limit=134",
    "?offset=386&limit=106",
    "?offset=493&limit=155",
  ]

  const [pokemon, setPokemon] = useState([])
  const [generation, setGeneration] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${generationList[generation]}`)
    .then((e)=>{return e.json()})
    .then((e)=>{
      setLoading(false)
      setPokemon(e.results)
    })
  },[generation])
  
  return (
    <>

      <button onClick={()=>{setGeneration(0)}} className="w-20 h-20 bg-red-500 z-50">1</button>
      <button onClick={()=>{setGeneration(1)}} className="w-20 h-20 bg-red-500 z-50">2</button>
      <button onClick={()=>{setGeneration(2)}} className="w-20 h-20 bg-red-500 z-50">3</button>
      <button onClick={()=>{setGeneration(3)}} className="w-20 h-20 bg-red-500 z-50">4</button>
      <button onClick={()=>{setGeneration(4)}} className="w-20 h-20 bg-red-500 z-50">5</button>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20 max-w-7xl mx-auto justify-items-center mt-28 gap-x-5">
        {
          loading ? <div className="col-span-4">Carregando ...</div> : null
        }
        
        {
          generation === 0 && pokemon.map((e,a)=>{
            return <Card namePokemon={e.name}/>
          })
        }
        {
          generation === 1 && pokemon.map((e)=>{
            return <Card namePokemon={e.name}/>
          })
        }
        {
          generation === 2 && pokemon.map((e)=>{
            return <Card namePokemon={e.name}/>
          })
        }
        {
          generation === 3 && pokemon.map((e)=>{
            return <Card namePokemon={e.name}/>
          })
        }
        {
          generation === 4 && pokemon.map((e)=>{
            return <Card namePokemon={e.name}/>
          })
        }
      </main>
    </>
  )
}

export default App
