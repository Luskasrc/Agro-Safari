import React,{ useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles'

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./img/img1.png')} />
        <Text style={styles.title}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NextScreen')}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
   
  export default HomeScreen;