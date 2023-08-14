import {  StyleProp, TextStyle, ViewStyle, TouchableOpacityProps } from "react-native"

type props = {
    label: string,
    width?: string | number,
    containerStyle?: StyleProp<ViewStyle>,
    textStyle? : StyleProp<TextStyle>
} & TouchableOpacityProps

export default props