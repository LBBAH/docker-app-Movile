import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Inputs from '../../components/Inputs';

export default function PreguntaSecreta(props) {
  const [secretQuestion, setSecretQuestion] = useState('');

  const handleSecretQuestionChange = (text) => {
    setSecretQuestion(text);
  };
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View>
        <TouchableOpacity style={styles.boton} onPress={() => props.navigation.navigate("Login")}>
          <Text style={styles.textVolver} >Volver</Text>
        </TouchableOpacity>


      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>¿Cual es tu comida favorita?</Text>
        <View style={{ marginTop: 20 }} />

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Ingresa tu respuesta</Text>
            <Inputs
              icon="key"
              name="Respuesta"
              value={secretQuestion}
              onChangeText={handleSecretQuestionChange}
              pass={false}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submin}
        >
          <Text style={styles.textSubmin} onPress={() => props.navigation.navigate('Pregunta')}>Buscar</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#536FEE',
    margin: 18,
    height: 35,
    borderRadius: 10,
    width: 70,
  },
  input: {

  },
  textVolver: {
    color: '#FBFCFC',
    marginLeft: 4,
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
  },
  textTitle: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  submin: {
    backgroundColor: '#536FEE',
    margin: 18,
    paddingHorizontal: 120,
    height: 55,
    borderRadius: 28,
  },
  textSubmin: {
    color: '#FBFCFC',
    marginLeft: 4,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 16,
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