import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../assets/data/color';

const HomeButton = ({ img, title, func, bgColor }) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: bgColor}]} onPress={func}>
        <View style={styles.imageWrapper}>
            <Image source={img} style={styles.imageStyles} />
        </View>
        <View style={styles.textWrapper}>
            <Text style={styles.titleTextStyles}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  textWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyles: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
