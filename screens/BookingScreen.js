import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import BookingCard from '../components/BookingCard';
import { colors } from '../assets/data/color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookingScreen = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let b = await AsyncStorage.getItem('myBookings');
        let myBookings = JSON.parse(b);
        setBookings(myBookings);
      } catch (error) {
        console.error('Error getting bookings:', error);
        setBookings([]);
      }
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bookingCardsWrapper}>
        {bookings && bookings.length > 0 ? (
          <FlatList
            data={bookings}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <BookingCard data={item} />}
          />
        ) : (
          <Text style={styles.noDataStyles}>No Bookings Yet!</Text>
        )}
      </View>
    </View>
  );
}

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookingCardsWrapper: {
    flex: 1,
    padding: 10,
  },
  noDataStyles: {
    backgroundColor: colors.borderColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  }
});
