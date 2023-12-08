import React,{ useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import { auth} from './firebaseconfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    

   

    
  
    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
    

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        const user = userCredential.user;
        console.log(user);

        const userId = user.uid;
        const db = getDatabase();
        set(ref(db, `users/${userId}`), {
          username: username,
          email: email,
          password: password
        });

        navigation.navigate('LoginScreen');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("Email invalido")
    return
  }); 
};
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('./img/img2.png')} />
        <Text style={styles.subtitle}>Olá! Vamos criar seu cadastro</Text>
  
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
  
        <Picker
          selectedValue={null}
          onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Prestador de serviço" value="prestador" />
          <Picker.Item label="Cliente" value="cliente" />
        </Picker>
  
        <TouchableOpacity
          style={styles.buttonr}
          onPress={() => onRegisterPress()}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.buttonr}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }


export default RegisterScreen;

