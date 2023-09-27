import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import props from "./Button.types";
import { useTheme } from "../../Hooks";


export default ({ label, containerStyle, textStyle, width, loading,...props }: props) => {
    const styles = useTheme()



    return <TouchableOpacity style={[{
        paddingVertical: 15,
        backgroundColor: styles.colors.primary,
        borderRadius: 20,
        width: width != null ? width : "100%",

    }, containerStyle]} {...props}>
        <View style={{flexDirection :"row", justifyContent:"center", alignItems :"center"}}>
            {
                loading ? <ActivityIndicator size={"large"} color={styles.colors.secondary} style={{marginLeft : -30, marginRight : 20}} /> : <></>
            }
            {
                props.children
            }
            <Text style={[{ textAlign: "center", alignSelf: "center", color: "white", fontWeight: "bold", fontSize: 15 }, textStyle]}>{label}</Text>
        </View>
    </TouchableOpacity>
}