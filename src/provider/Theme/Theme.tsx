import React, { createContext, useState } from "react";
import { ContextType } from "./Theme.types";

export const ThemeContext = createContext<ContextType>({
    colors: {
        primary: "#477ADB",
        secondary: "#477ADB",
        disabled: "#96A1B7"

    }
})

export default function({ children, theme }: { children: React.ReactNode, theme : ContextType }) {
    

    return (
        <ThemeContext.Provider value={{
            colors: {
                primary: "#477ADB",
                secondary: "#477ADB",
                disabled: "#96A1B7",
                ...theme.colors
            },
        }}>
            {children}
        </ThemeContext.Provider>
    )
}