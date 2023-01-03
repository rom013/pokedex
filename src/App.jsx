import { useEffect, useState } from "react"
import { Search, Card } from "./components/Box"
import ButtonGeneration from "./components/Btn"
function App() {

  const generationList = [
    "?offset=0&limit=151", //?offset=0&limit=151
    "?offset=151&limit=100", //?offset=151&limit=100
    "?offset=251&limit=134",
    "?offset=386&limit=106",
    "?offset=493&limit=155",
  ]

  const [pokemon, setPokemon] = useState([])
  const [generation, setGeneration] = useState(0)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState(false)

  function fetchPokemon(c){
    fetch(`https://pokeapi.co/api/v2/pokemon/${generationList[c]}`)
    .then((e)=>{return e.json()})
    .then((e)=>{
      setPokemon(e.results)
      setLoading(false)
      setGeneration
    })
  }
  return (
    <>
      <Search/>
      <section className="flex flex-col max-w-7xl mx-auto">
        <h3 className="font-bold text-2xl mb-4">GERAÇÕES</h3>
        <div className="flex gap-5 overflow-auto px-8 pb-5" id="ge">
          <ButtonGeneration img={"./generation_1.png"} generation={1} clicka={fetchPokemon}/>
          <ButtonGeneration img={"./generation_2.webp"} generation={2} clicka={fetchPokemon}/>
          <ButtonGeneration img={"./generation_3.webp"} generation={3} clicka={fetchPokemon}/>
          <ButtonGeneration img={"./generation_4.png"} generation={4} clicka={fetchPokemon}/>
          <ButtonGeneration img={"./generation_5.png"} generation={5} clicka={fetchPokemon}/>          
        </div>
      </section>
      
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20 max-w-7xl mx-auto justify-items-center mt-28 gap-x-5">
        {
          loading && <div className="col-span-4">Carregando ...</div>
        }
        {
          generation == 0 && (
            pokemon.map((e)=>{
              return <Card namePokemon={e.name}/>
            })
          )
        }
        {
          generation === 1 && (
            pokemon.map((e)=>{
              return <Card namePokemon={e.name}/>
            })
          )
        }
        {
          generation === 2 && (
            pokemon.map((e)=>{
              return <Card namePokemon={e.name}/>
            })
          )
        }
        {
          generation === 3 && (
            pokemon.map((e)=>{
              return <Card namePokemon={e.name}/>
            })
          )
        }
        {
          generation === 4 && (
            pokemon.map((e)=>{
              return <Card namePokemon={e.name}/>
            })
          )
        }
      </main>
    </>
  )
}

export default App
