import React,{ useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';

function NextScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./img/img1.png')} />
          <Text style={styles.subtitle}>
            Potencialize seu agronegócio com Agro Safari: a tecnologia que otimiza
            a produção e economiza tempo.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  export default NextScreen;