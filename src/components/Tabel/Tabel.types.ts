import { StyleProp, ViewStyle } from "react-native";

interface props { TableNumbering?: boolean, 
    header: string[], 
    data: Array<Array<any>>, 
    containerStyle?: StyleProp<ViewStyle> }

export default props