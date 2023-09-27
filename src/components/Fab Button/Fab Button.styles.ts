import {  StyleProp, TextStyle, ViewStyle, TouchableOpacityProps } from "react-native"

type props = {
    width?: string | number,
    containerStyle?: StyleProp<ViewStyle>,
    textStyle? : StyleProp<TextStyle>,
    loading? : boolean,
    text? : string,
    icon? : React.ReactNode
} & TouchableOpacityProps

export default props