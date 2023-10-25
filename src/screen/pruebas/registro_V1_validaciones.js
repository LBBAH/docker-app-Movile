import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Input from '../components/Inputs';
import Submit from '../components/Submit';
import { Button, CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import Modal from 'react-native-modal'

const API_Usuarios_registro = "http://localhost:8000/api/addUser";

const Registro = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const [name, setNombre] = useState("");
  const [nameUser, setnameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // Estado para rastrear la validación de los campos
  const [isValidNombre, setIsValidNombre] = useState(true);
  const [isValidNameUser, setIsValidNameUser] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const [nombreError, setNombreError] = useState("");
  const [nameUserError, setNameUserError] = useState("");
  const [nameUserError2, setNameUserError2] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);
  const [serverResponse, setServerResponse] = useState('');

  const handleInputFocus = (name) => {
    setFocusedInput(name);
  };

  const addUsuario = async () => {
    const obj = { name, email, password, phone, nameUser };

    if (isValidData()) {
      try {
        const response = await axios.post(API_Usuarios_registro, obj);
        console.log(response.data);
        const responseData = response.data;

        if (responseData.success) {
          // Si la respuesta contiene una clave "success", entonces se considera un mensaje de éxito
          setServerResponse(responseData.success);
        } else {
          // Si no hay un mensaje de éxito, considera la respuesta como un mensaje de error
          setServerResponse(responseData.error);
        }

        setModalVisible(true); // Muestra el modal
      } catch (error) {
        console.error(error);
        // Maneja el error y configura el mensaje de error
        setServerResponse("Se produjo un error al procesar su solicitud. Por favor, inténtelo de nuevo.");
        setModalVisible(true);
      }
    } else {
      // No se ejecuta la solicitud al servidor si los datos no son válidos
      alert('Por favor, complete todos los campos correctamente.');
    }
    // clearInput();
  }


  const isValidEmail2 = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  const isValidPhone2 = (phone) => {
    return /^(\d{10})$/.test(phone);
  }

  const isValidNameUser2 = (nameUser) => {
    // Expresión regular que permite letras y números, y al menos 3 caracteres de longitud.
    return /^[a-zA-Z0-9]{5,}$/.test(nameUser);
  }
  const isValidName2 = (name) => {
    // Expresión regular que permite letras y números, y al menos 3 caracteres de longitud.
    return /^[a-zA-Z0-9]{6,}$/.test(name);
  }

  const isValidData = () => {
    // Realiza todas las validaciones necesarias aquí
    const isNombreValid = isValidName2(name);
    const isNameUserValid = isValidNameUser2(nameUser);
    const isEmailValid = isValidEmail2(email);
    const isPasswordValid = password.length >= 6;
    const isPhoneValid = isValidPhone2(phone);

    // Puedes agregar más validaciones según tus requisitos

    setIsValidNombre(isNombreValid);
    setIsValidNameUser(isNameUserValid);
    setIsValidEmail(isEmailValid);
    setIsValidPassword(isPasswordValid);
    setIsValidPhone(isPhoneValid);

    setNombreError(isNombreValid ? '' : 'Se necesitan al menos 6 caracteres');
    setNameUserError(isNameUserValid ? '' : 'Nombre de usuario no válido. Debe contener solo letras y números.');
    setEmailError(isEmailValid ? '' : 'Correo electrónico no válido.');
    setPasswordError(isPasswordValid ? '' : 'La contraseña debe tener al menos 6 caracteres.');
    setPhoneError(isPhoneValid ? '' : 'El número de teléfono debe tener 10 dígitos numéricos.');

    return isNombreValid && isNameUserValid && isEmailValid && isPasswordValid && isPhoneValid;
  }



  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Logo_IDDEDUCATION.jpg')}
          resizeMode="center"
          style={styles.image} />
        <Text style={styles.textTitle}>Regístrate</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre Completo</Text>
            {/* <TextInput value={name} onChangeText={text => setNombre(text)} placeholder="Nombre Completo" name="Pedrito Peres Montoya" icon="user" onFocus={() => handleInputFocus('Nombre Completo')} isFocused={focusedInput === 'Nombre Completo'} /> */}
            <Input value={name} onChangeText={text => { setNombre(text); isValidData(); }} placeholder="Nombre Completo" name="Pedrito Peres Montoya" icon="user" onFocus={() => handleInputFocus('Nombre Completo')} isFocused={focusedInput === 'Nombre Completo'} style={isValidNombre ? styles.validInput : styles.invalidInput} />
            <Text style={styles.errorText}>{nombreError}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre De Usuario</Text>
            <Input value={nameUser} onChangeText={text => { setnameUser(text); isValidData(); }} placeholder="Nombre de usuario" name="PedroPM2003" icon="user" onFocus={() => handleInputFocus('Usuario')} isFocused={focusedInput === 'Usuario'} style={isValidNameUser ? styles.validInput : styles.invalidInput} />
            <Text style={styles.errorText}>{nameUserError}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Teléfono</Text>
            {/* <Input value={phone} onChangeText={text => { setPhone(text); isValidData(); }} placeholder="Telefono" name="7732139829" icon="phone" onFocus={() => handleInputFocus('Teléfono')} isFocused={focusedInput === 'Teléfono'} style={isValidPhone ? styles.validInput : styles.invalidInput} /> */}
            <Input value={phone} onChangeText={(text) => { setPhone(text); isValidData(); }} placeholder="Telefono" name="7732139829" icon="phone" onFocus={() => handleInputFocus('Teléfono')} isFocused={focusedInput === 'Teléfono'} style={isValidPhone ? styles.validInput : styles.invalidInput} />
            {/* <Input value={phone} onChangeText={(text) => { setPhone(text); isValidData(); }} placeholder="Telefono" style={isPhoneValid ? styles.validInput : styles.invalidInput} /> */}
            
            {/* <Input value={phone} onChangeText={this.handleTelefonoChange} placeholder="Telefono" name="7732139829" icon="phone" onFocus={() => handleInputFocus('Teléfono')} isFocused={focusedInput === 'Teléfono'} style={isValidPhone ? styles.validInput : styles.invalidInput} /> */}
            <Text style={styles.errorText}>{phoneError}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <Input value={email} onChangeText={text => { setEmail(text); isValidData(); }} placeholder="Email" name="iddeducation@gmail.com" icon="envelope" onFocus={() => handleInputFocus('Email')} isFocused={focusedInput === 'Email'} style={isValidEmail ? styles.validInput : styles.invalidInput} />
            <Text style={styles.errorText}>{emailError}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Contraseña</Text>
            <Input value={password} onChangeText={text => { setPassword(text); isValidData(); }} placeholder="Contraseñas" name="Password" icon="lock" pass={true} onFocus={() => handleInputFocus('Password')} isFocused={focusedInput === 'Password'} style={isValidPassword ? styles.validInput : styles.invalidInput} />
            <Text style={styles.errorText}>{passwordError}</Text>
          </View>

          {/* <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirmar Contraseña</Text>
            <TextInput value={phone} onChangeText={text => setPhone(text)} placeholder="Confirmar Contraseña" name="Confirmar Password" icon="lock" pass={true} onFocus={() => handleInputFocus('Confirmar Password')} isFocused={focusedInput === 'Confirmar Password'} />
          </View> */}

        </View>

        <CheckBox
          title="Aceptar términos y condiciones"
          checked={acceptTerms}
          onPress={() => setAcceptTerms(!acceptTerms)}
        />
        {/* <Submit onPress={addUsuario} color="#0251ce" title="Registrarme" disabled={!acceptTerms} style={styles.roundedButton} /> */}
        <Button title="Agregar Usuario" onPress={addUsuario} color="#0251ce" disabled={!acceptTerms} style={styles.roundedButton} />
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text>Respuesta del servidor:</Text>
          <Text>{serverResponse}</Text>
          <Button title="Cerrar Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontFamily: 'sans-serif',
    fontSize: 25,
    marginVertical: 16,
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

  input: {
    width: '100%',
    height: '100%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roundedButton: {
    borderRadius: 28,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
  },

  // Validación de campos
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: '100%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // validInput: {
  //   borderColor: 'green',
  //   borderWidth: 1,
  // },
  invalidInput: {
    borderColor: 'red',
    borderWidth: 1,
  },

  errorText: {
    color: 'red',
    fontWeight: 'bold',

  },

  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Registro;
