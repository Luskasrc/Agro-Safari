import { StyleSheet } from 'react-native';

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
    width: '100%',
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
  menuText:{
    flex: 1
  }, 
   bottomMenuItem: {
    width: '20%', // Ajuste a largura da imagem
    height: 30, // Ajuste a altura da imagem
    margin: 10,
    borderWidth: 10
 },

 bottomMenu: {

    backgroundColor: '#EEEEEE',
    flexDirection: 'row', // Alinha os elementos horizontalmente
    justifyContent: 'space-around', // Adiciona espaçamento entre os elementos
 },
})

export default styles;
