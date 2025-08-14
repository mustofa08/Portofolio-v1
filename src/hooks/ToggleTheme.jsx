import { Moon, Sun } from 'lucide-react';
import React, { useState,useEffect } from 'react'

const ToggleTheme = () => {
    const [isDark, setIsDark] = useState(()=>{
        if(typeof window !== "undefined"){
            return(
                localStorage.theme == "dark" ||
                (localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
            )
        }
        return false;
    })

    useEffect(()=>{
        const root = document.documentElement;
        if(isDark){
            root.classList.add("dark")
            localStorage.theme = "dark"
        }else{
            root.classList.remove("dark")
            localStorage.theme = "light"
        }
    },[isDark]);

  return (
    <div>
        <button
        onClick={()=>setIsDark(!isDark)}
        className='p-2 rounded dark:text-white dark:bg-gray-800 text-gray-900 bg-white' 
        >
            {isDark ? <Moon/> : <Sun/>}
        </button>
    </div>
  )
}

export default ToggleTheme