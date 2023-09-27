import React, { createContext, useState } from "react";
import { ContextType, Props } from "./Theme.types";

export const ThemeContext = createContext<ContextType>({
    colors: {
        primary: "#477ADB",
        secondary: "yellow",
        disabled: "#96A1B7"

    }
})

export default function({ children, theme }: Props ) {
    

    return (
        <ThemeContext.Provider value={{
            colors: {
                primary: "#477ADB",
                secondary: "yellow",
                disabled: "#96A1B7",
                ...theme?.colors
            },
        }}>
            {children}
        </ThemeContext.Provider>
    )
}