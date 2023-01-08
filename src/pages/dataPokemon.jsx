import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Type from "../components/Types"
import color from "../color.json"
import { ArrowArcLeft } from "phosphor-react"

export default function DataPokemon() {

    const { name } = useParams()
    const navigate = useNavigate()

    const [typePokemon, setTypePokemon] = useState()
    const colorTheme = {"background":color.theme.colors[typePokemon]}

    const [pokemon, setPokemon] = useState(
        {
            name: "",
            id: 0,
            description: "",
            height: 0,
            weight: 0,
            type: [{slot: 1, type: {name: ""}}],
            stats: []
        }
    )

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((e) => { return e.json() })
            .then((e) => {
                setPokemon(
                    {
                        name: e.name,
                        id: e.id,
                        description: "",
                        height: e.height,
                        weight: e.weight,
                        type: e.types,
                        stats: e.stats
                    }
                )
                setTypePokemon(e.types[0].type.name)
            }
        )
    }, [])

    return (
        <>
            <header 
                className="w-full md:min-h-[400px] md:h-fit flex justify-center flex-col"
                style={colorTheme}    
            >
                <button 
                    className="rounded-full w-10 h-10 opacity-30 hover:opacity-100 transition bg-gray-200 flex items-center justify-center ml-6 mt-5"
                    onClick={()=>{navigate('/')}}
                >
                    <ArrowArcLeft size={24}/>
                </button>
                <section className="max-w-5xl mx-auto flex-1 p-8">
                    <div className="bg-black/40 md:px-16 py-4 flex flex-col md:flex-row justify-between gap-6 items-center rounded-lg">
                        <div className="flex flex-col items-center">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} className="w-80" />
                            <span className="uppercase text-white font-bold text-3xl text-center">{pokemon.name}</span>
                            <span className="text-gray-300">#{pokemon.id}</span>
                        </div>
                        <div className="md:w-1/2 px-6 flex flex-col items-center gap-6">
                            <p className="text-white text-xs md:text-base">
                                A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.
                            </p>

                            <div className="grid grid-cols-2 grid-rows-2 gap-4 text-white w-full sm:w-3/4 border border-gray-300 rounded p-2">
                                <span className="text-xs md:text-base">Height: {pokemon.height / 10} m</span>
                                <span className="text-xs md:text-base">Weight: {pokemon.weight / 10} Kg</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs md:text-base">Type: </span>
                                    {
                                        pokemon.type.map((e) => {
                                            return <Type type={e.type.name} />
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <main className="max-w-7xl mx-auto p-6">
                <section>
                    <h3 className="text-2xl font-bold mb-6">Status</h3>
                    <table className="text-white w-1/2 min-w-[250px] max-w-xl mx-auto px-6">
                        <tbody className="bg-gray-800">

                            {
                                pokemon.stats.map((e)=>{
                                    return (
                                        <tr className="w-full border border-b-slate-400">
                                            <td className="px-6 py-3 capitalize">{e.stat.name}</td>
                                            <td className="px-6 py-3">{e.base_stat}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}