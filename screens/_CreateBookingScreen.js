import React, { useEffect, useState, useMemo, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { AntDesign } from '@expo/vector-icons';
import { getSites } from '../assets/data/getData';
import Button from '../components/Button';
import { colors } from '../assets/data/color';
import { saveBooking } from '../assets/data/saveData';

const CreateBookingScreen = ({ navigation }) => {
  const [selectedSiteId, setSelectedSiteId] = useState(null);
  const [selectedSiteName, setSelectedSiteName] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['1%', '40%'], []);
  const region = {
    latitude: 7.297418,
    longitude: 80.631696,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const sites = getSites
        setMarkers(sites);
      } catch (error) {
        console.error('Error getting data:', error);
        setMarkers([]);
      }
    };
    getData();
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedSiteId(marker.site_id);
    setSelectedSiteName(marker.title);
    bottomSheetRef.current.expand();
  };

  const handleDateConfirm = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
  
    if (selectedDate.toLocaleDateString() >= today.toLocaleDateString()) {
      setSelectedDate(selectedDate.toLocaleDateString());
    } else {
      Alert.alert('Invalid Date', 'Please select a date equal to or higher than today.');
      setSelectedDate(null);
    }
    setDatePickerVisibility(false);
  };
  
  const handleTimeConfirm = (time) => {
    const selectedTime = new Date(time);
    const selectedDate = new Date(selectedDate);
    setSelectedTime(selectedTime.toLocaleTimeString());
    setTimePickerVisibility(false);
  };
  
  const handleBookingBtnClick = async () => {
    if (!selectedSiteId) {
      Alert.alert('Error', 'Please Select a Parking Area');
      return;
    }
    if (!selectedDate || !selectedTime) {
      Alert.alert('Error', 'Please Select Date and Time');
      return;
    }
    try {
      let res = await saveBooking(selectedDate, selectedTime, selectedSiteName); 
      if(res.stt == 'ok'){
        Alert.alert('Success', res.msg);
        navigation.navigate('My Bookings');
        setSelectedSiteId(null);
        setSelectedSiteName(null);
        setSelectedDate(null);
        setSelectedTime(null);
      }else{
        Alert.alert('Error', res.msg);
      }
    } catch (error) {
      console.error('error', error)
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            onPress={() => handleMarkerClick(marker)}
          />
        ))}
      </MapView>
      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text style={styles.siteNameStyles}>{selectedSiteName}</Text>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={() => setDatePickerVisibility(false)}
          />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={() => setTimePickerVisibility(false)}
          />
          <TouchableOpacity
            style={styles.dateTimePickerStyles}
            onPress={() => setDatePickerVisibility(true)}>
            <AntDesign name="calendar" size={24} style={styles.inputIconStyles} />
            <Text style={styles.inputTextStyles}>
              {!selectedDate ? 'Select Date' : selectedDate}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dateTimePickerStyles}
            onPress={() => setTimePickerVisibility(true)}>
            <AntDesign name="clockcircleo" size={24} style={styles.inputIconStyles} />
            <Text style={styles.inputTextStyles}>
              {!selectedTime ? 'Select Time' : selectedTime}
            </Text>
          </TouchableOpacity>
          <View style={styles.btnWrapper}>
            <Button
              bgColor={colors.primaryColor}
              content={<Text style={styles.btnStyles}>Save</Text>}
              func={handleBookingBtnClick}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default CreateBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  siteNameStyles: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  dateTimePickerStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '90%',
  },
  inputIconStyles: {
    marginRight: 15,
    color: colors.textColor,
  },
  inputTextStyles: {
    color: colors.textColor,
  },
  btnWrapper: {
    width: '90%',
    marginTop: 10,
  },
  btnStyles: {
    color: 'white',
  },
});
