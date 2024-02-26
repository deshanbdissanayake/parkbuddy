import AsyncStorage from '@react-native-async-storage/async-storage';

const saveBooking = async (selectedDate, selectedTime, selectedSiteName) => {
  try {
    let currentBookings = await AsyncStorage.getItem('myBookings');
    let vehicleType = await AsyncStorage.getItem('vehicleType');
    currentBookings = currentBookings ? JSON.parse(currentBookings) : [];
    let newBooking = {
      date: selectedDate,
      intime: selectedTime,
      outtime: '',
      site: selectedSiteName,
      stt: 'pending',
      amount: 'calculating',
      vehicle_type: vehicleType,
    };
    currentBookings.unshift(newBooking);
    await AsyncStorage.setItem('myBookings', JSON.stringify(currentBookings));
    return {stt : 'ok', msg : 'New booking added'}
  } catch (error) {
    console.error('Error adding booking:', error);
    return {stt : 'error', msg : 'Failed to add booking. Please try again.'}
  }
};

export { saveBooking }