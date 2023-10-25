import React ,{ Component,useState}from 'react';
import { Text, Button, View,StyleSheet,Image,ScrollView} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Inputs from '../../components/Inputs';



export default function RContraseña(props,{navigation}) {
  const [focusedInput, setFocusedInput] = useState(null); // Estado para realizar un seguimiento de qué campo está enfocado
  
  const handleInputFocus = (name) => {
    setFocusedInput(name);
  };

  const handlePress = () => {
   
    props.navigation.navigate("PreguntaSecreta")
  
  };
  return(
    <ScrollView style={{backgroundColor: 'white'}}>
       <View>
        <TouchableOpacity style={styles.boton} onPress={() => props.navigation.navigate("Login")}>
          <Text style={styles.textVolver} >Volver</Text>
        </TouchableOpacity>

      
        </View>
      <View style={styles.container}>
          <Text style={styles.textTitle}>Restablecer contraseña</Text>
          <View style={{marginTop: 20}} />
        
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
            <Inputs 
              name="Email"
              icon="user"
              onFocus={() => handleInputFocus('Email')}
              isFocused={focusedInput === 'Email'}
            />
          </View> 
        </View> 
            <TouchableOpacity style={styles.submin}>  
            <Text style={styles.textSubmin} onPress={() => props.navigation.navigate('Pregunta')}>Buscar</Text>
          </TouchableOpacity>
        
        </View>
       
      </ScrollView>  
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center', 
  },
  boton:{
    backgroundColor: '#536FEE',
    margin: 18,
    height: 35,
    borderRadius:10,
    width: 70,
  },
  textVolver:{
    color: '#FBFCFC',
    marginLeft:4,
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
  },
  textTitle:{
    fontSize:20,
    marginVertical:15,
    fontWeight:'bold',
    textAlign:'center'
  },
  submin:{
    backgroundColor: '#536FEE',
    margin: 18,
    paddingHorizontal:120,
    height: 55,
    borderRadius:28,   
  },
  textSubmin:{
    color: '#FBFCFC',
    marginLeft:4,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 16,
    fontWeight:'bold',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '94%', 
    alignItems: 'center', 
    marginBottom: 16,
    paddingLeft: 20,
  },
  inputContainer: {
    width: '100%', 
    marginBottom: 16,
  },
});