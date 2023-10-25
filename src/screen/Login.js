import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { SuccessDialog } from './SuccessDialog';
import { LOGIN_URL } from './apis/Api';
import {AsyncStorage} from 'react-native';



export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      const responseData = response.data;
      if (responseData.id) {
        setAuthSuccess(true);
        setWelcomeMessage('¡Bienvenido '  + responseData.name + '! Autenticación exitosa.');
        setShowWelcomeDialog(true);
        setEmail('');
        setPassword('');

        
        try {
          await AsyncStorage.setItem('user', responseData);          
        } catch (error) {
          console.error('Error al guardar datos en AsyncStorage:', error);
        }
        
      } else {    
        setAuthSuccess(false);
        setWelcomeMessage('Credenciales incorrectas. Inténtalo de nuevo.');
        setShowWelcomeDialog(true); // Establecer showWelcomeDialog en true en ambos casos
        setEmail('');
        setPassword('') 
      }
    } catch (error) {
      console.error(error);
      setAuthSuccess(false);
      setWelcomeMessage('Error en la solicitud. Por favor, inténtalo de nuevo.');
      setShowWelcomeDialog(true);
      setEmail('');
      setPassword('') 
    }
  };

  const closeWelcomeDialog = () => {
    setShowWelcomeDialog(false);
    if (authSuccess) {      
      navigation.navigate('Cursos');
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Logo_IDDEDUCATION.jpg')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Inicio de sesión</Text>

        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity>
            <Text style={styles.textLink}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
            <Text style={styles.textSubmit}>Iniciar sesión</Text>
          </TouchableOpacity>

          <Text style={styles.textCuenta}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.textLink}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SuccessDialog
        visible={showWelcomeDialog}
        message={welcomeMessage}
        onClose={closeWelcomeDialog}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  textTitle: {
    fontFamily: 'sans-serif',
    fontSize: 25,
    marginVertical: 15,
    fontWeight: 'bold',
  },
  textLink: {
    fontSize: 16,
    margin: 12,
    color: '#0748C2',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#0748C2',
  },
  submitButton: {
    backgroundColor: '#536FEE',
    margin: 18,
    paddingHorizontal: 85,
    height: 55,
    borderRadius: 28,
  },
  textSubmit: {
    color: '#FBFCFC',
    marginLeft: 4,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 16,
    fontWeight: 'bold',
  },
  textCuenta: {
    fontSize: 18,
    fontFamily: 'serif',
    margin: 5,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 16,
  },
  formContainer: {
    width: '94%',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 20,
  },
});
