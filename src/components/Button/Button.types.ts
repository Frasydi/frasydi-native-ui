import {  StyleProp, TextStyle, ViewStyle, TouchableOpacityProps, DimensionValue } from "react-native"

type props = {
    label: string,
    width?: DimensionValue,
    containerStyle?: StyleProp<ViewStyle>,
    textStyle? : StyleProp<TextStyle>,
    loading? : boolean,
} & TouchableOpacityProps

export default props