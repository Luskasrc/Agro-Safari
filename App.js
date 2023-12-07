import React,{ useState, useEffect } from 'react';
import Inicial from './Inicial';
import { Picker } from '@react-native-picker/picker';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Location, Permissions } from 'expo-location';
import { firebase } from './firebaseconfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebaseconfig'

const Stack = createStackNavigator();

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


function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleRegister = () => {
    // Lógica para processar o registro com os dados coletados
    // Aqui você pode adicionar validações, enviar dados para o servidor, etc.
    console.log('Registrando usuário:', {
      email,
      username,
      password,
      confirmPassword,
    });
      if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebaseConfig
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebaseConfig.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
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
        onPress={() => navigation.navigate('LoginScreen')}>
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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        console.log (user);
        navigation.navigate('Home');

  })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorMessage);
  });

  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./img/img3.png')} />
      <Text style={styles.title}>Faça o Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
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

      <TouchableOpacity
        style={styles.button}
        onPress={(handleLogin) => navigation.navigate('Inicial')}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonr}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const Info1 = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.containeri} behavior="padding">
      <ScrollView>
        <Text style={styles.welcome}>Olá, Victor!</Text>

        <Text style={styles.native}>Páis, cidade</Text>

        <Text style={styles.instructions}>Informações</Text>

        <Image
          style={styles.img1}
          source={require('./img/img4.png')}
          onPress={() => navigation.navigate('Info1')}
        />
        <Image
          style={styles.img1}
          source={require('./img/img5.png')}
          onPress={() => navigation.navigate('Info2')}
        />
        <Text style={styles.sojaText}>Precisa de algum serviço?</Text>
        <TextInput
          style={styles.inputi}
          placeholder="Q Encontre serviços aqui...."
        />

        <Text style={styles.soja}>Home</Text>

        <Text style={styles.soja}>Serviços</Text>

        <Text style={styles.sojaText}>Perfil</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Info2 = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.containeri} behavior="padding">
      <ScrollView>
        <Text style={styles.welcome}>Olá, Victor!</Text>

        <Text style={styles.native}>Páis, cidade</Text>

        <Text style={styles.instructions}>Informações</Text>

        <Image
          style={styles.img1}
          source={require('./img/img4.png')}
          onPress={() => navigation.navigate('Info1')}
        />
        <Image
          style={styles.img1}
          source={require('./img/img5.png')}
          onPress={() => navigation.navigate('Info2')}
        />
        <Text style={styles.sojaText}>Precisa de algum serviço?</Text>
        <TextInput
          style={styles.inputi}
          placeholder="Q Encontre serviços aqui...."
        />

        <Text style={styles.soja}>Home</Text>

        <Text style={styles.soja}>Serviços</Text>

        <Text style={styles.sojaText}>Perfil</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Info1" component={Info1} />
        <Stack.Screen name="Info2" component={Info2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B9A47',
  },
  logo: {
    width: 200,
    height: 100,
  },
  img: {
    width: 100,
    height: 100,
  },
  img1: {
    width: 300,
    height: 150,
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  button: {
    backgroundColor: '#8B9A47',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    width: 315,
    height: 70,
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 60,
  },
  buttonr: {
    backgroundColor: '#8B9A47',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    width: 315,
    height: 70,
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: '#D6E3E2',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#D6E3E2',
  },
  picker: {
    height: 50,
    width: 300,
    marginBottom: 15,
    color: 'white',
    backgroundColor: '#8B9A47',
  },
  containeri: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  welcome: {
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 16,
    family: 'Arial',
    weight: 'bold',
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  soja: {
    fontSize: 18,
    marginBottom: 4,
  },
  sojaText: {
    marginTop: 13,
    fontSize: 14,
    color: 'black',
    marginBottom: 16,
  },
  inputi: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#D6E3E2',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
  native: {
    color: '#8B9A47',
    flex: 1,
  },
});
