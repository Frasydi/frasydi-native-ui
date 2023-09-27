import React from "react"

export type WarningTypes = "error" | "success" | "nothing" | "loading"

export type alertParams = { title?: string, text?: string, type?: WarningTypes, allowOutsideClick? :boolean, allowForceQuit? : boolean, buttons : JSX.Element[] }

export type ContextType = {
    alert: (data?: alertParams) => void,
    close: () => void,
    
}

