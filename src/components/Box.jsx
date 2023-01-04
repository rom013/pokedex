import Type from "./Types"
import { useState, useEffect } from "react";

export function Card(props){
    let color = ""

    const [valueAPI, setValueAPI] = useState({
        name: "",
        id: 0,
        type: [{slot: 0, type: {}}]
    })
    const [loading, setLoading] = useState(true)

    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.namePokemon}`)
        .then((e)=>{return e.json()})
        .then((e)=>{
            setLoading(false)
            setValueAPI({
                name: e.forms[0].name,
                id: e.id,
                type: e.types
            })
        })
    },[props])

    if(valueAPI.type[0].type.name == "grass"){
        color = "bg-[#3BE100]"
    }
    else if(valueAPI.type[0].type.name == "ground"){
        color = "bg-[#C18A49]"
    }
    else if(valueAPI.type[0].type.name == "psychic"){
        color = "bg-[#A1007E]"
    }
    else if(valueAPI.type[0].type.name == "fairy"){
        color = "bg-[#FF00E5]"
    }
    else if(valueAPI.type[0].type.name == "fighting"){
        color = "bg-[#B42201]"
    }
    else if(valueAPI.type[0].type.name == "poison"){
        color = "bg-[#6600B6]"
    }
    else if(valueAPI.type[0].type.name == "bug"){
        color = "bg-[#ADFF00]"
    }
    else if(valueAPI.type[0].type.name == "rock"){
        color = "bg-[#C37500]"
    }
    else if(valueAPI.type[0].type.name == "ghost"){
        color = "bg-[#280543]"
    }
    else if(valueAPI.type[0].type.name == "steel"){
        color = "bg-[#989898]"
    }
    else if(valueAPI.type[0].type.name == "normal"){
        color = "bg-[#D9D9D9]"
    }
    else if(valueAPI.type[0].type.name == "flying"){
        color = "bg-[#00E1B9]"
    }
    else if(valueAPI.type[0].type.name == "fire"){
        color = "bg-[#E13600]"
    }
    else if(valueAPI.type[0].type.name == "water"){
        color = "bg-[#0083E1]"
    }
    else if(valueAPI.type[0].type.name == "electric"){
        color = "bg-[#FAFF00]"
    }
    else if(valueAPI.type[0].type.name == "ice"){
        color = "bg-[#90E4FF]"
    }
    else if(valueAPI.type[0].type.name == "dragon"){
        color = "bg-[#3A389F]"
    }
    else if(valueAPI.type[0].type.name == "dark"){
        color = "bg-[#291D2D]"
    }

    return (
        <>
            {
                loading ? <div className="progress"></div> : (
                    <div className="max-w-[256px] w-full h-80 flex flex-col justify-end relative">
                        <div className={`h-1/2 ${color} rounded-t-lg`}>
                            <img 
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${valueAPI.id}.png`} 
                                className="-translate-y-28 z-30 drop-shadow-md"
                            />
                        </div>
                        <div className="min-h-24 bg-white px-6 py-3 flex flex-col justify-between gap-y-2 rounded-b-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold capitalize">{valueAPI.name}</span>
                                <span className="text-gray-400">#{valueAPI.id}</span>
                            </div>

                            <div className="flex items-center">
                                <span>Type: </span>
                                <div className="flex gap-2 ml-4">
                                    {
                                        valueAPI.type.map((e, key)=>{
                                            return <Type type={e.type.name} key={key}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export function Search(props){
    const [pokemon, setPokemon] = useState([])
    const [searchError, setSearchError] = useState(false)

    function searchPokemon(){
        props.loading(true)
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((e)=>{return e.json()})
        .then((e)=>{
            setSearchError(false)
            props.searchPokemon([{name: e.name}])
            setPokemon('')
        })
        .catch(()=>{
            setSearchError(true)
        })
        .finally(()=>{
            props.loading(false)
        })
    }

    return(
        <div className="w-full flex items-center flex-col my-8 px-6">
            <div className="flex">
                <input 
                    type="text" 
                    className={`px-4 py-1 rounded-tl-lg rounded-bl-lg focus:outline-none border ${searchError ? "border-red-600 bg-red-200" : "border-transparent bg-white"}`}
                    onChange={(e)=>{setPokemon(e.target.value.toLowerCase())}}
                    onKeyUp={(e)=>{e.key === 'Enter' && searchPokemon()}}
                    value={pokemon}
                    placeholder="Ex.: Zekrom ou 644"
                />
                <button 
                    type="button" 
                    className="bg-blue-600 rounded-tr-lg rounded-br-lg px-3 text-white font-bold flex-1"
                    onClick={()=>{searchPokemon()}}
                >Buscar</button>
            </div>
            {
                searchError && <span className="text-red-700 text-xs">Ops! Não foi possível encontrar o seu pokémon</span>
            }
        </div>
    )
}