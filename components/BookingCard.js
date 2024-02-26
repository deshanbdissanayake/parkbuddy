import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/data/color'

const BookingCard = ({ data }) => {
  return (
    <View style={[styles.container, {backgroundColor: data.stt === 'done' ? colors.bgLightGreenColor : colors.bgLightRedColor}]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.imageStyles} source={data.vehicle_icon} />
        <Text style={styles.priceStyles}>Rs.{data.amount}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.siteStyles} numberOfLines={1}>{data.site}</Text>
        <Text style={styles.dateStyles}>{data.date}</Text>
        <View style={styles.timeWrapper}>
          <Text style={styles.inTimeStyles}>In: {data.intime}</Text>
          <Text style={styles.outTimeStyles}>Out: {data.outtime ? data.outtime : '-'}</Text>
        </View>
        <Text style={[styles.sttStyles, {backgroundColor: data.stt === 'done' ? 'darkgreen' : 'darkred'}]}>{data.stt}</Text>
      </View>
    </View>
  )
}

export default BookingCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  imageWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    width: 60, 
    height: 60,
    resizeMode: 'cover',
  },
  textWrapper: {
    flex: 4,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  siteStyles: {
    fontSize: 16,
    fontWeight: '500',
  },
  dateStyles: {
    fontSize: 14,
    fontWeight: '400',
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inTimeStyles: {
    fontSize: 12,
  },
  outTimeStyles: {
    fontSize: 12,
  },
  sttStyles: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  priceStyles: {
    fontSize: 16,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 10,
  },
})