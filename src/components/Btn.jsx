export default function ButtonGeneration(props){
    return(
        <div className="snap-always snap-center">  
            <input type="radio" name="generation" id={props.generation}
                onChange={()=>{props.clicka(props.generation - 1)}} 
                className="hidden"
            />
            <label htmlFor={props.generation}  className="button-generation cursor-pointer hover:bg-slate-200 dark:text-white dark:bg-sky-900 transition duration-300">
                <span>{props.generation}° Geração</span>
                <img src={props.img}/>
            </label>
        </div>
    )
}