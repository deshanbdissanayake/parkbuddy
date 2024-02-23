import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ bgColor, content, func }) => {
  return (
    <TouchableOpacity onPress={func}>
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            {content}
        </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
    }
})