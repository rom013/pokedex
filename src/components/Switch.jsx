import * as Switch from '@radix-ui/react-switch';
import { useState, useEffect } from 'react';


export default function SwitchComponent({mode, stats}){
    const active = localStorage.theme_dark

    useEffect(()=>{
        if(localStorage.theme_dark === 'true'){
            mode(true)
        }
    },[])
    
    return(
        <Switch.Root 
            className='w-10 h-6 bg-red-500 rounded-full relative data-[state="checked"]:bg-violet-900'
            onClick={()=>{
                mode(!stats)
                localStorage.setItem("theme_dark", !stats)
            }}
            defaultChecked={active == 'true' ? true : false}
        >
            <Switch.Thumb 
                className='block w-5 h-5 rounded-full bg-white transition translate-x-1 will-change-transform data-[state="checked"]:translate-x-4'
            />
        </Switch.Root>
    )
}