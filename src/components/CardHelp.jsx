import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const CardHelp = ({ name, imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    marginTop: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginTop:10
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});