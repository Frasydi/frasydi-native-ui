import { Text, View, Pressable, Modal, Dimensions, Animated } from "react-native";
import props from "./Select.types";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../Hooks";

export default function Select({ label, containerStyle, HeaderIcon, onChange,TrailIcon, textStyle, password, error, items, ...props }: props) {
    const theme = useTheme()
    const [selected, setSelected] = useState<string>()
    const [open, setOpen] = useState(false)

    const height = Dimensions.get("window").height
    const moveAnim = useRef(new Animated.Value(height)).current

    useEffect(() => {
        if (open) {
            Animated.timing(moveAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,

            }).start()
        }
    }, [open])

    useEffect(() => {
        onChange(selected)
    }, [selected])

    return (
        <>
            <View>
                <Text style={[{
                    fontSize: 15, marginBottom: 10, color: "grey"
                }, textStyle]}>{label}</Text>
                <View style={{
                    flexDirection: "row", borderWidth: 1,
                    paddingVertical: 20,
                    borderRadius: 10,
                    alignItems: "center",
                    paddingRight: 20,
                    position: "relative",
                    paddingLeft: HeaderIcon != null ? 10 : 20,
                    borderColor: error ? "red" : "grey",
                    elevation: error ? 10 : 0,
                    shadowColor: error ? "red" : "black",
                    backgroundColor: "white"
                }}>
                    {
                        HeaderIcon
                    }
                    <Pressable

                        style={{
                            paddingLeft: HeaderIcon != null ? 10 : 0,
                            marginRight: 10,
                        }}

                        onPress={() => {
                            setOpen(true)
                        }}


                    >
                        <Text style={{ color: selected != null ? "black" :"grey" }}>{
                        selected != null ? selected : 
                       ` Masukkan ${label}`}</Text>
                    </Pressable>
                    {
                        TrailIcon
                    }

                </View>
            </View>
            <Text style={{marginTop : 10, color :"red"}}>{error}</Text>
            <Modal
                animationType="fade"
                transparent={true}

                visible={open}
                onRequestClose={() => {
                    Animated.timing(moveAnim, {
                        toValue: height,
                        duration: 500,
                        useNativeDriver: true
                    }).start(() => {
                        setOpen(false)
                    })
                }}>

                <View style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.4)"
                }}>

                    <Animated.View style={{
                        position: "absolute",
                        bottom: 0,
                        transform: [{
                            translateY: moveAnim
                        }],
                        backgroundColor: "whitesmoke",
                        
                        width: "100%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 10
                        }}>
                            Select {label}
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent :"center",flexWrap: "wrap", alignItems: "center", width: "100%", backgroundColor: "whitesmoke" }}>
                            {
                                items.map((el, ind) => <Pressable key={"select-item-" + label + "-" + ind + "-" + el} onPress={() => {
                                    setSelected(el)
                                    Animated.timing(moveAnim, {
                                        toValue: height,
                                        duration: 500,
                                        useNativeDriver: true
                                    }).start(() => {
                                        setOpen(false)
                                    })
                                }} style={({ pressed }) => [{ paddingVertical: 10, borderWidth: selected == el ? 2 : 1, width: "27%", backgroundColor: pressed ? theme.colors.primary : "whitesmoke", marginHorizontal: 10, marginVertical: 10, borderColor:  "grey", borderRadius: 10 }]}>
                                    {
                                        ({pressed}) => 
                                    <Text style={{ textAlign: "center", fontWeight: selected == el ? "bold" : "normal", color :pressed ? "white":"black" }}>{el}</Text>
                                    }
                                </Pressable>)
                            }
                        </View>
                    </Animated.View>
                </View>

            </Modal>
        </>
    )
}