import { useEffect, useRef, useState } from "react"
import { Search, Card } from "../components/Box"
import ButtonGeneration from "../components/Btn"

import { ArrowUp } from "phosphor-react"


export default function Home() {
    const generationList = [
        "?offset=0&limit=151", //?offset=0&limit=151
        "?offset=151&limit=100", //?offset=151&limit=100
        "?offset=251&limit=134",
        "?offset=386&limit=106",
        "?offset=493&limit=155",
        "?offset=649&limit=72",
        "?offset=721&limit=88",
        "?offset=809&limit=96",
    ]

    const mainDiv = useRef()
    const [pokemon, setPokemon] = useState([])
    const [generation, setGeneration] = useState(0)
    const [loading, setLoading] = useState(true)

    function fetchPokemonGeneration(c) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${generationList[c]}`)
            .then((e) => { return e.json() })
            .then((e) => {
                setPokemon(e.results)
                setLoading(false)
            })
        setGeneration(c + 1)
    }

    useEffect(() => {
        fetchPokemonGeneration(0)
        console.log("Ok");
    }, [])
    return (
        <div ref={mainDiv}>
            <Search searchPokemon={setPokemon} loading={setLoading} />
            <button
                className="w-10 h-10 fixed right-10 bottom-10 z-50 bg-red-400 rounded-full flex justify-center items-center text-white"
                onClick={() => {
                    mainDiv.current.scrollIntoView({ behavior: "smooth" })
                }}
            >
                <ArrowUp size={32} />
            </button>
            <section className="flex flex-col max-w-7xl mx-auto px-6">
                <h3 className="font-bold text-2xl mb-4">GERAÇÕES</h3>
                <div className="flex gap-5 overflow-auto snap-x snap-mandatory px-8 pb-5" id="ge">
                    <ButtonGeneration img={"./generation_1.png"} generation={1} clicka={fetchPokemonGeneration} />
                    <ButtonGeneration img={"./generation_2.png"} generation={2} clicka={fetchPokemonGeneration} />
                    <ButtonGeneration img={"./generation_3.webp"} generation={3} clicka={fetchPokemonGeneration} />
                    <ButtonGeneration img={"./generation_4.png"} generation={4} clicka={fetchPokemonGeneration} />
                    <ButtonGeneration img={"./generation_5.png"} generation={5} clicka={fetchPokemonGeneration} />
                    <ButtonGeneration img={"./generation_6.png"} generation={6} clicka={fetchPokemonGeneration} />
                    <ButtonGeneration img={"./generation_7.png"} generation={7} clicka={fetchPokemonGeneration} />
                    <ButtonGeneration img={"./generation_8.png"} generation={8} clicka={fetchPokemonGeneration} />
                </div>
            </section>

            <main className=" max-w-7xl mx-auto mt-10 px-6">
                <span className="text-gray-600 font-bold text-2xl">{generation}° Geração</span>
                <hr className="border-gray-300 mb-10" />
                <section className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-5 justify-items-center">
                    {
                        loading && <div className="col-span-4">Carregando ...</div>
                    }
                    {
                        pokemon.map((e, key) => {
                            return <Card namePokemon={e.name} key={key} />
                        })
                    }
                </section>
                <hr className="border-gray-300" />
            </main>
        </div>
    )
}