import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ bgColor, content, func }) => {
  return (
    <TouchableOpacity onPress={func}>
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            <Text style={styles.textStyles}>{content}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        
    },
    textStyles: {

    },
})