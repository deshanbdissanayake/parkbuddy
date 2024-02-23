import { ScrollView, StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { colors } from '../assets/color'

const RegisterScreen = ({ navigation }) => {
  const [vehicleNo, setVehicleNo] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);

  const handleRegisterClick = () => {
    
  }

  return (
    <KeyboardAvoidingView
        style={{ flexGrow:1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
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
  formWrapper: {
    justifyContent: 'flex-end',
    flexGrow: 1,
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