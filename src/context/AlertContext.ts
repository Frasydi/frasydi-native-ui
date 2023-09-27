import { createContext } from "react";
import { ContextType } from "../provider/Alert/Alert.types";

export default createContext<ContextType>({
    alert : (data) => {},
    close : () => {},
    
})
