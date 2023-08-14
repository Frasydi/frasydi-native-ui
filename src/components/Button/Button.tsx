import { StyleProp, TextInput, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewProps, ViewStyle } from "react-native";
import props from "./Button.types";
import { useTheme } from "../../Hooks";


export default ({ label, containerStyle, textStyle, width, ...props }: props) => {
    const styles = useTheme()



    return <TouchableOpacity style={[{
        paddingVertical: 15,
        backgroundColor: styles.colors.primary,
        borderRadius: 20,
        width: width != null ? width : "100%"
    }, containerStyle]} {...props}>
    <Text style={[{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 15 }, textStyle]}>{label}</Text>
</TouchableOpacity>
}