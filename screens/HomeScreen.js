import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeButton from '../components/HomeButton';
import { colors } from '../assets/data/color';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  const [username, setUsername] = useState('');

  useEffect(()=>{
    const getData = async () => {
      try {
        const un = await AsyncStorage.getItem('username');
        setUsername(un)
      } catch (error) {
        console.error('error', error)
      }
    }
    getData()
  },[])

  const handleButtonClick = (nav) => {
    navigation.navigate(nav)
  }

  const handleLogOut = () => {
    return Alert.alert('Confirm Logout', 'Are you sure?',  [
      {
        text: 'Cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {
          AsyncStorage.clear();
          navigation.navigate('Welcome')
        }
      }
    ]);
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image source={require('../assets/logo.png')} style={styles.logoStyles} />
        <Text style={styles.headerTextStyles}>Hello {username} !</Text>
        <TouchableOpacity style={styles.logOutBtnStyles} onPress={handleLogOut} >
          <MaterialIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <HomeButton 
          img={require('../assets/images/booking.png')} 
          title={'My Bookings'}
          func={() => handleButtonClick('My Bookings')}
          bgColor={colors.bgLightRedColor}
        />
        <HomeButton 
          img={require('../assets/images/create.png')} 
          title={'Create Bookings'}
          func={() => handleButtonClick('Create Booking')}
          bgColor={colors.bgLightGreenColor}
        />
        <HomeButton 
          img={require('../assets/images/profile.png')} 
          title={'My Profile'}
          func={() => handleButtonClick('My Profile')}
          bgColor={colors.bgLightBlueColor}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerWrapper: {
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  logoStyles: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  headerTextStyles: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  btnWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logOutBtnStyles: {
    marginLeft: 20,
    padding: 10,
  }
})