import color from "../color.json"

export default function Type(props){
    let colorTheme = {
        "background" : color.theme.colors[props.type]
    }
    return (
        <div className={`rounded-full flex items-center justify-center h-5 px-2 bg-ice`} 
            style={colorTheme}
        >
            <span className={`text-xs capitalize text-white font-bold`}>
                {props.type}
            </span>
        </div>
    )
}