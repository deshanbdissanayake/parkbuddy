import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, Image } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { colors } from '../assets/color'

const WelcomeScreen = () => {

    const handleLoginClick = () => {}

    const handleRegisterClick = () => {}

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.imageWrapper} >
                <Image source={require('../assets/logo.png')} style={styles.imageStyles} />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleTextStyles}>Welcome to Parking Buddy!</Text>
                <Text style={styles.subTitleTextStyles}>Your go-to for stress-free parking. Let's get started!</Text>
            </View>
            <View style={styles.btnWrapper}>
                <Button bgColor={colors.primaryColor} content={<Text style={{color: 'white'}}>Login</Text>} func={handleLoginClick} />
                <Button bgColor={colors.secondaryColor} content={<Text style={{color: 'white'}}>Register</Text>} func={handleRegisterClick} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    imageWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyles: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    titleWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    titleTextStyles: {
        fontSize: 36,
        fontWeight: '600',
        color: colors.textColor,
    },
    subTitleTextStyles: {
        fontSize: 16,
        color: colors.textColor,
        marginTop: 10,
        paddingRight: 50,
    },
    btnWrapper: {
        flex: 1,
    },
})