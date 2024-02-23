import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../assets/color";

const Input = ({keyboardType, value, onChangeText, placeholder, secureTextEntry, alignment = 'left'}) => {

  
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
});