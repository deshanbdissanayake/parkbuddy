import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, Image, ScrollView, Alert } from 'react-native';
import Button from '../components/Button';
import { colors } from '../assets/data/color';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({ navigation }) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [showPw, setShowPw] = useState(false);
    const [storedUsername, setStoredUsername] = useState(null);
    const [storedPassword, setStoredPassword] = useState(null);

    useEffect(() => {
        // Load stored username and password from AsyncStorage
        getData();
    }, [storedUsername]);

    const handleLoginClick = () => {
        // Check if the entered credentials match the stored ones
        if (!storedUsername) {
        Alert.alert('Error', 'You are not yet registered!', [{
            text: 'OK',
            onPress: () => navigation.navigate('Register')
        }]);
        } else if (username !== storedUsername || password !== storedPassword) {
            Alert.alert('Error', 'Check your credentials again!');
        } else {
            // Login successful
            navigation.navigate('Home');
            setUsername(null)
            setPassword(null)
        }
    };

    const handleRegisterClick = () => {
        if (!storedUsername) {
            navigation.navigate('Register');
        }else{
            Alert.alert('Error', 'You already have an account!')
        }
    };

    const getData = async () => {
        try {
        const un = await AsyncStorage.getItem('username');
        const pw = await AsyncStorage.getItem('password');
        setStoredUsername(un);
        setStoredPassword(pw);
        } catch (error) {
        console.error('Error', error);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flexGrow:1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image source={require('../assets/logo.png')} style={styles.imageStyles} />
                </View>

                <View style={styles.titleWrapper}>
                    <Text style={styles.titleTextStyles}>Welcome to Parking Buddy!</Text>
                    <Text style={styles.subtitleTextStyles}>Your go-to for stress-free parking.</Text>
                </View>
                <View style={styles.formWrapper}>
                    <View style={styles.inputWrapper}>
                        <Input
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                            placeholder='Enter Your Username'
                            alignment='center'
                        />
                        <Input
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder='Enter Your Password'
                            secureTextEntry={!showPw}
                            alignment='center'
                            pwIcon={true}
                            pwIconFunc={() => setShowPw(!showPw)}
                        />
                    </View>
                    <Button bgColor={colors.primaryColor} content={<Text style={styles.buttonText}>Login</Text>} func={handleLoginClick} />
                    <Button bgColor={colors.secondaryColor} content={<Text style={styles.buttonText}>Register</Text>} func={handleRegisterClick} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    imageWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    titleWrapper: {
        flex: 1,
        marginBottom: 20,
    },
    formWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    inputWrapper: {
        marginBottom: 20,
    },
    imageStyles: {
        width: 160,
        height: 160,
        resizeMode: 'cover',
    },
    titleTextStyles: {
        fontSize: 28,
        fontWeight: '600',
        color: colors.textColor,
        textAlign: 'center',
    },
    subtitleTextStyles: {
        fontSize: 16,
        color: colors.textColor,
        textAlign: 'center',
        marginTop: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
