import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageRow = ({ image1, image2 }) => {
 return (
    <View style={{ flexDirection: 'row', marginBottom: 100
 }}>
      <Image source={image1} style={styles.img1} />
      <Image source={image2} style={styles.img1} />
    </View>
 );
};

const styles = StyleSheet.create({
 img1: {
    width: 100,
    height: 150,
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: 'row'
 },
});

export default ImageRow;