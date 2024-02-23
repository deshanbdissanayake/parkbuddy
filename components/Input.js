import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../assets/color";
import { Feather } from "@expo/vector-icons";

const Input = ({keyboardType, value, onChangeText, placeholder, secureTextEntry, alignment = 'left', pwIcon = false, pwIconFunc}) => {

  
    return (
    <View style={styles.inputWrapper} >
        <TextInput
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={[styles.inputTextStyles, {textAlign: alignment}]}
        />
        {pwIcon ? 
            (
                <TouchableOpacity onPress={pwIconFunc} style={styles.pwIconStyles}>
                    {
                        secureTextEntry ? (
                            <Feather name="eye" size={24} color={colors.textLightColor} />
                        ) : (
                            <Feather name="eye-off" size={24} color={colors.textLightColor} />
                        )
                    }
                </TouchableOpacity>
            )
         : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
    inputWrapper: {
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderColor: colors.borderColor,
        marginBottom: 15,
    },
    inputTextStyles: {
        fontSize: 14,
        width: '100%',
    },
    pwIconStyles: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 10,
        zIndex: 2,
    }
});