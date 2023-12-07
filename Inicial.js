import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, TextInput } from 'react-native';
import styles from './styles';  // Certifique-se de ter o arquivo styles.js ou ajuste o caminho conforme necessário
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const Inicial = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        setErrorMsg('Permissão de acesso à localização negada.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.containeri} behavior="padding">
      <ScrollView>
        <Text style={styles.welcome}>Olá, Victor!</Text>

        <Text style={styles.native}>
          {location ? JSON.stringify(location) : 'Aguarde a localização...'}
        </Text>

        {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>}

        <Text style={styles.instructions}>Informações</Text>

        <TouchableOpacity
          style={styles.img1}
          onPress={() => navigation.navigate('Info1')}>
          <Image style={styles.img1} source={require('./img/img4.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.img1}
          onPress={() => navigation.navigate('Info2')}>
          <Image style={styles.img1} source={require('./img/img5.png')} />
        </TouchableOpacity>

        <Text style={styles.sojaText}>Precisa de algum serviço?</Text>
        <TextInput
          style={styles.inputi}
          placeholder="Encontre serviços aqui...."
        />

        <TouchableOpacity
          style={styles.img1}
          onPress={() => navigation.navigate('Info2')}>
          <Image style={styles.img1} source={require('./img/img8.png')} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('Info1')}>
          <Image style={styles.bottomMenuItem} source={require('./img/img6.png')} />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Info1')}>
          <Image style={styles.bottomMenuItem} source={require('./img/img7.png')} />
          <Text style={styles.menuText}>Serviços</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Inicial;
