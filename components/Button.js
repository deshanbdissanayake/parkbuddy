import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ bgColor, content, func }) => {
  return (
    <TouchableOpacity onPress={func} style={[styles.container, {backgroundColor: bgColor}]}>
      {content}
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