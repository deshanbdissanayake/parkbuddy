import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import CreateBookingScreen from './screens/CreateBookingScreen';
import ProfileScreen from './screens/ProfileScreen';
import { colors } from './assets/data/color';

const Stack = createStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown : false }} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown : false }} />
      <Stack.Screen name="My Bookings" component={BookingScreen} />
      <Stack.Screen name="Create Booking" component={CreateBookingScreen} />
      <Stack.Screen name="My Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content" />
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
});
