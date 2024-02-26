import { ScrollView, StyleSheet, View, Text, KeyboardAvoidingView, Platform, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { colors } from '../assets/data/color'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Select from '../components/Select'
import { getVehicleTypes } from '../assets/data/getData'

const RegisterScreen = ({ navigation }) => {
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(()=> {
    const getData = async () => {
      try {
        let types = getVehicleTypes;
        setVehicleTypes(types);
      } catch (error) {
        console.error('Error getting vehicle types:', error);
        setVehicleTypes([]);
      }
    }
    getData()
  },[])

  const handleRegisterClick = async () => {
    try {
      // Validations
      if (
        vehicleType === '' || 
        vehicleNo === '' || 
        !isValidPhoneNumber(phoneNo) ||
        username === '' || 
        password === ''
      ) {
        Alert.alert('Error', 'Please fill in all fields correctly');
        return;
      }
  
      // Save registration data to AsyncStorage
      await AsyncStorage.setItem('vehicleType', vehicleType);
      await AsyncStorage.setItem('vehicleNo', vehicleNo);
      await AsyncStorage.setItem('phoneNo', phoneNo);
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
        
      // Redirect or perform any other actions after successful registration
      navigation.navigate('Home');
  
    } catch (error) {
      Alert.alert('Error', 'Error saving registration data');
      console.error('error', error)
    }
  }

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(07)\d{8}$/;
    return phoneRegex.test(phoneNumber);
  }
  

  return (
    <KeyboardAvoidingView
        style={{ flexGrow:1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={require('../assets/parking.png')} style={styles.imageStyles} />
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
            <Select
              val={vehicleType}
              func={setVehicleType}
              items={[
                { label: 'Select Vehicle Type', value: '' },
                ...vehicleTypes
              ]}
            />
            <Input 
              value={vehicleNo}
              onChangeText={(text) => setVehicleNo(text)}
              placeholder='Vehicle Number'
            />
            <Input 
              keyboardType={'number-pad'}
              value={phoneNo}
              onChangeText={(text) => setPhoneNo(text)}
              placeholder='Phone Number (07xxxxxxxx)'
            />
            <Input 
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder='Username'
            />
            <Input 
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder='Password'
              secureTextEntry={!showPw}
              pwIcon={true}
              pwIconFunc={() => setShowPw(!showPw)}
            />
          </View>
          <View style={styles.btnWrapper}>
            <Button 
              bgColor={colors.secondaryColor} 
              content={<Text style={styles.buttonText}>Register</Text>} 
              func={handleRegisterClick} 
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    width: 160,
    height: 160,
    resizeMode: 'cover',
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  inputWrapper: {

  },
  btnWrapper: {
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
})