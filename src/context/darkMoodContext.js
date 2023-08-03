import { createContext, useEffect, useState } from "react";

export const DarkModContext = createContext();

export const DarkModContextProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("dark-mood")) || false);

    useEffect(() => {

        localStorage.setItem("dark-mood", isDark);

        // change the color and bg of body depend on isDark 
        isDark ? document.body.classList.add('changeBgAndColor') : document.body.classList.remove('changeBgAndColor');

    }, [isDark])

    const toggle = () => {
        setIsDark(!isDark);
    }

    return (
        <DarkModContext.Provider value={{ isDark, toggle }}>
            {children}
        </DarkModContext.Provider>
    )
}