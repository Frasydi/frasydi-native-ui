import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';
type props = { error?: string,password?: boolean, 
    label: string, HeaderIcon?: JSX.Element, 
    TrailIcon?: JSX.Element, textStyle?: StyleProp<TextStyle>, 
    containerStyle?: StyleProp<ViewStyle>, name : string } & TextInputProps

export default props
