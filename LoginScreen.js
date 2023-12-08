import React,{ useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { auth } from './firebaseconfig'
import styles from './styles';
import { signInWithEmailAndPassword } from "firebase/auth";


export default function LoginScreen  ({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onLoginPress = () => {
        
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigation.navigate('Inicial');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("Email ou Senha invalidos")
  });
    }
  
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('./img/img3.png')} />
        <Text style={styles.title}>Faça o Login</Text>
  
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
  
        <TouchableOpacity
          style={styles.button}
          onPress={() => onLoginPress()}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.buttonr}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
}