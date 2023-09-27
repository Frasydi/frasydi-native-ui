import props from "./Fab Button.styles";
import { useTheme } from "../../Hooks";
import { TouchableOpacity, View, Text } from "react-native"
export default function({ containerStyle, textStyle, width, loading, icon, text, ...props }: props) {
    const styles = useTheme()



    return <TouchableOpacity style={[{
        padding: 15,
        backgroundColor: styles.colors.primary,
        borderRadius: 50,

    }, containerStyle]} {...props}>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            {
                icon
            }
            {
                text != null ? <Text style={[{ textAlign: "center", alignSelf: "center", color: "white", fontWeight: "bold", fontSize: 15 }, textStyle]}>{text}</Text>
                    :
                    <></>

            }


        </View>
    </TouchableOpacity>
}