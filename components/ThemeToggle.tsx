"use client"
import { MoonStarIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted,setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true)
    },[])
    if(!mounted){
        return null
    }
    return (
        <button className="rounded-full shadow dark:border-gray-700 p-2 border" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? (<SunIcon className="w-5 h-5" />) : (<MoonStarIcon className="w-5 h-5" />)}
        </button>
    )
}

export default ThemeToggle