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
                    <div className="max-w-[256px] w-full h-80 flex flex-col justify-end" key={valueAPI.id}>
                        <div className={`h-1/2 ${color} rounded-t-lg`}>
                            <img 
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${valueAPI.id}.png`} 
                                className="-translate-y-28"
                            />
                        </div>
                        <div className="h-24 bg-white px-6 py-3 flex flex-col justify-between rounded-b-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold capitalize">{valueAPI.name}</span>
                                <span className="text-gray-400">#{valueAPI.id}</span>
                            </div>

                            <div className="flex items-center">
                                <span>Tipo: </span>
                                <div className="flex gap-2 ml-4">
                                    {
                                        valueAPI.type.map((e,s)=>{
                                            return <Type type={e.type.name}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

        // <h1>{props.namePokemon}</h1>
    )
}