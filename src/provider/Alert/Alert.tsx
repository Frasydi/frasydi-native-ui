import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { Modal, Text, View, ActivityIndicator, Pressable } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { ContextType, WarningTypes, alertParams } from "./Alert.types";
import { useTheme } from "../../Hooks";
import AlertContext from "../../context/AlertContext";







export default function({ children }: { children: React.ReactNode }) {
    const theme = useTheme()
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState<string>("")
    const [text, setText] = useState<string>("")
    const [type, setType] = useState<WarningTypes>("nothing")
    const [allowOutsideClick, setAllowOutsideClick] = useState(true)
    const [allowForceQuit, setAllowForceQuit] = useState(true)
    const [buttons, setButtons] = useState<JSX.Element[]>([])

    const typeEl = useMemo(() => {
        if (type == "error") {
            return <Feather name="x" size={90} style={{ alignSelf: "center" }} color={"red"} />
        } else if (type == "success") {
            return <IonicIcons name="checkmark-circle" size={80} style={{ alignSelf: "center" }} color="green" />
        } else if (type == "loading") {

            return <ActivityIndicator size={90} color={theme.colors.secondary} />
        }

        else return null
    }, [type])

    

    function alert(data?: alertParams) {

        if (data != null) {
            const { text, type, title, allowOutsideClick, allowForceQuit, buttons } = data
            setText(text || "")
            setType(type || "nothing")
            setTitle(title || "")
            setAllowOutsideClick(allowOutsideClick != null ? allowOutsideClick : true)
            setAllowForceQuit(allowForceQuit != null ? allowForceQuit : true)
            setButtons(buttons)
        }
        setShow(true)
    }

    function stopp() {

        setShow(false);
        setText("")
        setType("nothing")
        setTitle("")
        setAllowOutsideClick(true)
        setAllowForceQuit(true)
        setButtons([])

    }


    useEffect(() => {
        console.log(allowOutsideClick)
    }, [allowOutsideClick])


    return (
        <>
            <AlertContext.Provider value={{
                alert: alert,
                close : stopp
            }} >
                {
                    children
                }
            </AlertContext.Provider>
            <Modal
                animationType="fade"
                transparent={true}
                visible={show}
                onRequestClose={() => {
                    
                    if (type == "loading" || !allowForceQuit) return
                    stopp()
                }}

            >
                <Pressable style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }} onPress={() => {
                   
                    if (type == "loading" ||!allowOutsideClick) return
                    stopp()
                }} >

                    <View style={{
                        minHeight: 200,
                        width: 300,
                        backgroundColor: "white",
                        elevation: 10,
                        paddingVertical : 10

                    }}>
                        {
                            typeEl
                        }
                        <Text style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>{title}</Text>
                        <Text style={{
                            fontSize: 20,
                            textAlign: "center"
                        }}>{text}</Text>
                        <View style={{marginTop : 20,flexWrap :"wrap",flexDirection :"row", alignContent :"stretch", justifyContent:"space-around", width :"100%"}}>
                            {
                                buttons.map((El : any, ind) => <El key={"button-index-"+ind} />)
                                
                            }
                        </View>
                    </View>
                </Pressable>

            </Modal>
        </>
    )
}