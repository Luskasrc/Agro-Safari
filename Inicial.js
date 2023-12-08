import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, TextInput } from 'react-native';
import styles from './styles';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { getDatabase, ref, child, get } from 'firebase/database';
import { auth } from './firebaseconfig'; // Importe o auth do seu arquivo firebaseconfig

const Inicial = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [username, setUserName] = useState(''); // Adicione o estado para armazenar o nome do usuário

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
    const userId = auth.currentUser?.uid;

    if (userId) {
      const db = getDatabase();
      const userRef = ref(db, `users/${userId}/username`);

      // Buscando o nome do usuário no banco de dados
      get(child(userRef, '/'))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserName(snapshot.val());
          } else {
            setUserName('Usuário Desconhecido');
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar o nome do usuário:', error);
          setUserName('Usuário Desconhecido');
        });
    }
  }, []);

  return (
    <KeyboardAvoidingView style={styles.containeri} behavior="padding">
      <ScrollView>
        <Text style={styles.welcome}>{`Olá, ${username}!`}</Text>

        <Text style={styles.native}>
          {location ? JSON.stringify(location) : 'Aguarde a localização...'}
        </Text>

        {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>}

        <Text style={styles.instructions}>Informações</Text>

        <TouchableOpacity
          style={styles.img1}
          onPress={() => navigation.navigate('WeatherScreen')}>
          <Image style={styles.img1} source={require('./img/img4.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.img1}
          onPress={() => navigation.navigate('WeatherScreen')}>
          <Image style={styles.img1} source={require('./img/img5.png')} />
        </TouchableOpacity>

        <Text style={styles.sojaText}>Precisa de algum serviço?</Text>
        <TextInput
          style={styles.inputi}
          placeholder="Encontre serviços aqui...."
        />

        <TouchableOpacity
          style={styles.img1}
          onPress={() => navigation.navigate('WeatherScreen')}>
          <Image style={styles.img1} source={require('./img/img8.png')} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('WeatherScreen')}>
          <Image style={styles.bottomMenuItem} source={require('./img/img6.png')} />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('WeatherScreen')}>
          <Image style={styles.bottomMenuItem} source={require('./img/img7.png')} />
          <Text style={styles.menuText}>Serviços</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Inicial;
