import { Text, View, TextInput, TextInputProps, StyleProp, ViewStyle, TextProps, TextStyle, TouchableOpacity } from "react-native";
import React, { LegacyRef, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import props from "./TextField.types";

export default ({ label, containerStyle, HeaderIcon, TrailIcon, textStyle, password, error,...props }: props) => {
    const [showPassword, setShowPassword] = useState(false)

    return <View style={containerStyle}>
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
            shadowColor : error ? "red" : "black",
            backgroundColor :"white"
        }}>
            {
                HeaderIcon
            }
            <TextInput
            
                style={{
                    paddingLeft: HeaderIcon != null ? 10 : 0,
                    marginRight: 10,
                }} placeholder={"Masukkan " + label}
                secureTextEntry={showPassword ? false : password}
                {...props}

            />
            {
                TrailIcon != null ? TrailIcon : password ?

                    <View style={{
                        position: "absolute",
                        right: 10
                    }}>
                        <TouchableOpacity onPress={() => {
                            setShowPassword(!showPassword)
                        }}>
                            <Feather name={showPassword ? "eye" : "eye-off"} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    : <></>
            }

        </View>
        {
            error && <Text style={{color :"red", marginTop : 10, fontSize : 12}}>{error}</Text>
        }
    </View>
}