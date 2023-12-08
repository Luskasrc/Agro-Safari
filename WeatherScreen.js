import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

function WeatherScreen ({navigation}) {
  

  const handleNavigateToInicial = () => {
    navigation.navigate('Inicial');
  };

  return (
    <View style={styles.containerinfo1}>
      <Image style={styles.img10} source={require('./img/img10.png')} />
      <TouchableOpacity onPress={handleNavigateToInicial} style={styles.icon}>
        <Image source={require('./img/icon.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default WeatherScreen;