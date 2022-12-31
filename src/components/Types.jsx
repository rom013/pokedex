export default function Type(props){
    let color = ""
    // console.log(props);
    if(props.type == "grass"){
        color = "bg-[#3BE100]"
    }
    else if(props.type == "ground"){
        color = "bg-[#C18A49]"
    }
    else if(props.type == "psychic"){
        color = "bg-[#A1007E]"
    }
    else if(props.type == "fairy"){
        color = "bg-[#FF00E5]"
    }
    else if(props.type == "fighting"){
        color = "bg-[#B42201]"
    }
    else if(props.type == "poison"){
        color = "bg-[#6600B6]"
    }
    else if(props.type == "bug"){
        color = "bg-[#ADFF00]"
    }
    else if(props.type == "rock"){
        color = "bg-[#C37500]"
    }
    else if(props.type == "ghost"){
        color = "bg-[#280543]"
    }
    else if(props.type == "steel"){
        color = "bg-[#989898]"
    }
    else if(props.type == "normal"){
        color = "bg-[#D9D9D9]"
    }
    else if(props.type == "flying"){
        color = "bg-[#00E1B9]"
    }
    else if(props.type == "fire"){
        color = "bg-[#E13600]"
    }
    else if(props.type == "water"){
        color = "bg-[#0083E1]"
    }
    else if(props.type == "electric"){
        color = "bg-[#FAFF00]"
    }
    else if(props.type == "ice"){
        color = "bg-[#90E4FF]"
    }
    else if(props.type == "dragon"){
        color = "bg-[#3A389F]"
    }
    else if(props.type == "dark"){
        color = "bg-[#291D2D]"
    }

    return (
        <div className={`rounded-full flex items-center justify-center h-5 px-2 ${color}`}>
            <span className={`text-xs capitalize text-white font-bold`}>
                {props.type}
            </span>
        </div>
    )
}