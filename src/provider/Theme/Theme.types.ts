export type ContextType = {
    colors : {
        primary : string,
        secondary : string,
        disabled : string
    }
}

export type Props = { children: React.ReactNode, theme? : ContextType }