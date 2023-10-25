import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Input from '../components/Inputs';
import Submit from '../components/Submit';
import { Button, CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import Modal from 'react-native-modal'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
// const API_Usuarios_registro = "http://localhost:8000/api/addUser";
const API_Usuarios_registro = "https://educacionespecialmx.site/idd_Educatio_back/public_html/api/addUser";


const Registro = () => {

  const navigation = useNavigation(); // Usar useNavigation para obtener la navegación
    const route_Login = () => {
        // navigation.navigate('Registro');
        navigation.navigate('Login');
    };

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const [name, setNombre] = useState("");
  const [nameUser, setnameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [Confirmpassword, setPConfirmpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  // Estado para rastrear la validación de los campos
  const [isValidNombre, setIsValidNombre] = useState(true);
  const [isValidNameUser, setIsValidNameUser] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const [nombreError, setNombreError] = useState("");
  const [nameUserError, setNameUserError] = useState("");
  const [nameUserError2, setNameUserError2] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");


  // const [isModalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [serverResponse, setServerResponse] = useState('');

  const [isSuccessResponse, setIsSuccessResponse] = useState(false); // Inicialmente, no es una respuesta exitosa
  const [isErrorResponse, setIsErrorResponse] = useState(false); // Inicialmente, no es una respuesta de error

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
          setModalVisible(true); // Muestra el modal
          setIsSuccessResponse(true);
        } else {
          // Si no hay un mensaje de éxito, considera la respuesta como un mensaje de error
          setServerResponse(responseData.error);
          setIsErrorResponse(true); // Configura el estado de error a verdadero
          setIsSuccessResponse(false); // Configura el estado de éxito a falso
          setModalVisible(true); // Muestra el modal
        }
      } catch (error) {
        console.error(error);
        // Maneja el error y configura el mensaje de error
        setServerResponse("Se produjo un error al procesar su solicitud. Por favor, inténtelo de nuevo.");
        setIsErrorResponse(true); // Configura el estado de error a verdadero
        setIsSuccessResponse(false); // Configura el estado de éxito a falso
        setModalVisible(true); // Muestra el modal
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

  const isValidData = (fieldName) => {
    // Realiza la validación para el campo específico
    if (fieldName === "name") {
      const isNombreValid = isValidName2(name);
      setIsValidNombre(isNombreValid);
      setNombreError(isNombreValid ? '' : 'Se necesitan al menos 6 caracteres');
    } else if (fieldName === "nameUser") {
      const isNameUserValid = isValidNameUser2(nameUser);
      setIsValidNameUser(isNameUserValid);
      setNameUserError(isNameUserValid ? '' : 'Nombre de usuario no válido. Debe contener solo letras y números.');
    } else if (fieldName === "email") {
      const isEmailValid = isValidEmail2(email);
      setIsValidEmail(isEmailValid);
      setEmailError(isEmailValid ? '' : 'Correo electrónico no válido.');
    } else if (fieldName === "password") {
      const isPasswordValid = password.length >= 6;
      setIsValidPassword(isPasswordValid);
      setPasswordError(isPasswordValid ? '' : 'La contraseña debe tener al menos 6 caracteres.');
    } else if (fieldName === "confirmPassword") {
      const isConfirmPasswordValid = confirmPassword === password;
      setIsValidConfirmPassword(isConfirmPasswordValid);
      setConfirmPasswordError(isConfirmPasswordValid ? '' : 'Las contraseñas no coinciden.');
    } else if (fieldName === "phone") {
      const isPhoneValid = isValidPhone2(phone);
      setIsValidPhone(isPhoneValid);
      setPhoneError(isPhoneValid ? '' : 'El número de teléfono debe tener 10 dígitos numéricos.');
    }
    // Devuelve un valor booleano si es necesario
    // const isAllValid = isNombreValid && isNameUserValid && isEmailValid && isPasswordValid && isPhoneValid;
    // return isAllValid;
    return (
      isValidName2(name) &&
      isValidNameUser2(nameUser) &&
      isValidEmail2(email) &&
      password.length >= 6 &&
      isValidPhone2(phone) &&
      confirmPassword === password
    );
  }

  const limpiarCampos = () => {
    setNombre("");
    setnameUser("");
    setEmail("");
    setPassword("");
    setPhone("");
    setConfirmPassword(""); // Si también deseas limpiar el campo de confirmación de contraseña

    // Limpia los mensajes de error
    setValidationErrors({
      name: '',
      nameUser: '',
      email: '',
      password: '',
      phone: '',
      confirmPassword: '', // Asegúrate de incluirlo si también lo estás utilizando
    });
  };



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
            {/* <Input value={name} onChangeText={text => { setNombre(text); isValidData(); }} placeholder="Nombre Completo" name="Pedrito Peres Montoya" icon="user" onFocus={() => handleInputFocus('Nombre Completo')} isFocused={focusedInput === 'Nombre Completo'} style={isValidNombre ? styles.validInput : styles.invalidInput} /> */}
            <Input value={name} onChangeText={text => setNombre(text)} onBlur={() => isValidData("name")} placeholder="Nombre Completo" name="Pedrito Peres Montoya" icon="user" onFocus={() => handleInputFocus('Nombre Completo')} isFocused={focusedInput === 'Nombre Completo'} style={isValidNombre ? styles.validInput : styles.invalidInput} />
            <Text style={styles.errorText}>{nombreError}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre De Usuario</Text>
            {/* <Input value={nameUser} onChangeText={text => { setnameUser(text); isValidData(); }} placeholder="Nombre de usuario" name="PedroPM2003" icon="user" onFocus={() => handleInputFocus('Usuario')} isFocused={focusedInput === 'Usuario'} style={isValidNameUser ? styles.validInput : styles.invalidInput} /> */}
            <Input value={nameUser} onChangeText={text => setnameUser(text)} onBlur={() => isValidData("nameUser")} placeholder="Nombre de usuario" name="PedroPM2003" icon="user" onFocus={() => handleInputFocus('Usuario')} isFocused={focusedInput === 'Usuario'} style={isValidNameUser ? styles.validInput : styles.invalidInput} />
            <Text style={styles.errorText}>{nameUserError}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            {/* <Input value={email} onChangeText={text => { setEmail(text); isValidData(); }} placeholder="Email" name="iddeducation@gmail.com" icon="envelope" onFocus={() => handleInputFocus('Email')} isFocused={focusedInput === 'Email'} style={isValidEmail ? styles.validInput : styles.invalidInput} /> */}
            <Input value={email} onChangeText={text => setEmail(text)} onBlur={() => isValidData("email")} placeholder="Email" name="iddeducation@gmail.com" icon="envelope" onFocus={() => handleInputFocus('Email')} isFocused={focusedInput === 'Email'} style={isValidEmail ? styles.validInput : styles.invalidInput} />
            <Text style={styles.errorText}>{emailError}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Contraseña</Text>
            {/* <Input value={password} onChangeText={text => { setPassword(text); isValidData(); }} placeholder="Contraseñas" name="Password" icon="lock" pass={true} onFocus={() => handleInputFocus('Password')} isFocused={focusedInput === 'Password'} style={isValidPassword ? styles.validInput : styles.invalidInput} /> */}
            <Input value={password} onChangeText={text => setPassword(text)} onBlur={() => isValidData("password")} placeholder="Contraseñas" name="Password" icon="lock" pass={true} onFocus={() => handleInputFocus('Password')} isFocused={focusedInput === 'Password'} style={isValidPassword ? styles.validInput : styles.invalidInput} />
            <Text style={styles.errorText}>{passwordError}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirmar Contraseña</Text>
            {/* <Input value={password} onChangeText={text => { setPassword(text); isValidData(); }} placeholder="Contraseñas" name="Password" icon="lock" pass={true} onFocus={() => handleInputFocus('Password')} isFocused={focusedInput === 'Password'} style={isValidPassword ? styles.validInput : styles.invalidInput} /> */}
            <Input value={confirmPassword} onChangeText={text => setConfirmPassword(text)} onBlur={() => isValidData("confirmPassword")} placeholder="Contraseñas" name="confirmPassword" icon="lock" pass={true} onFocus={() => handleInputFocus('confirmPassword')} isFocused={focusedInput === 'confirmPassword'} style={isValidConfirmPassword ? styles.validInput : styles.invalidInput} />
            {/* <Text style={styles.errorText}>{passwordError}</Text> */}
            <Text style={styles.errorText}>{confirmPasswordError}</Text>
          </View>

          {/* <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirmar Contraseña</Text>
            <TextInput value={phone} onChangeText={text => setPhone(text)} placeholder="Confirmar Contraseña" name="Confirmar Password" icon="lock" pass={true} onFocus={() => handleInputFocus('Confirmar Password')} isFocused={focusedInput === 'Confirmar Password'} />
          </View> */}

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Teléfono (10 digitos)</Text>
            {/* <Input value={phone} onChangeText={(text) => { setPhone(text); isValidData(); }} placeholder="Telefono" name="7732139829" icon="phone" onFocus={() => handleInputFocus('Teléfono')} isFocused={focusedInput === 'Teléfono'} style={isValidPhone ? styles.validInput : styles.invalidInput} /> */}
            <Input value={phone} onChangeText={text => setPhone(text)} onBlur={() => isValidData("phone")} placeholder="Telefono" name="7732139829" icon="phone" onFocus={() => handleInputFocus('Teléfono')} isFocused={focusedInput === 'Teléfono'} style={isValidPhone ? styles.validInput : styles.invalidInput} />
            <Text style={styles.errorText}>{phoneError}</Text>
          </View>
        </View>

        <CheckBox
          title="Aceptar términos y condiciones"
          checked={acceptTerms}
          onPress={() => setAcceptTerms(!acceptTerms)}
        />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Agregar Usuario" onPress={addUsuario} color="#0251ce" disabled={!acceptTerms} style={styles.roundedButton} />

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <Text style={styles.modalTitle}>Respuesta</Text>
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                {/* <TouchableOpacity onPress={() => { closeModal(); limpiarCampos(); }} style={styles.closeButton}> */}
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.modalText}>
                {serverResponse}
              </Text>
              {/* <Button title="Cerrar" onPress={closeModal} /> */}
              {/* <Button title="Cerrar" onPress={() => { closeModal(); limpiarCampos(); }} /> */}

              {isSuccessResponse && (
                // <Button title="Limpiar Campos" onPress={limpiarCampos} color="#ff0000" style={styles.roundedButton} />
                // route_Login
                <Button title="Limpiar Campos" onPress={() => { route_Login(); closeModal(); limpiarCampos(); }} color="#ff0000" style={styles.roundedButton} />
                // <Button title="Limpiar Campos" onPress={() => { closeModal(); limpiarCampos(); }} color="#ff0000" style={styles.roundedButton} />
              )}
              {isErrorResponse && (
                <Button title="Cerrar" onPress={closeModal} color="#00ff00" style={styles.roundedButton} />
              )}
            </View>
          </View>
        </Modal>
      </View>
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


  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 320,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
    borderRadius: 20,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Registro;


// const addUsuario = async () => {
  //   const obj = { name, email, password, phone, nameUser };

  //   if (isValidData()) {
  //     try {
  //       const response = await axios.post(API_Usuarios_registro, obj);
  //       console.log(response.data);
  //       const responseData = response.data;

  //       if (responseData.success) {
  //         // Si la respuesta contiene una clave "success", entonces se considera un mensaje de éxito
  //         setServerResponse(responseData.success);
  //       } else {
  //         // Si no hay un mensaje de éxito, considera la respuesta como un mensaje de error
  //         setServerResponse(responseData.error);
  //       }

  //       setModalVisible(true); // Muestra el modal
  //     } catch (error) {
  //       console.error(error);
  //       // Maneja el error y configura el mensaje de error
  //       setServerResponse("Se produjo un error al procesar su solicitud. Por favor, inténtelo de nuevo.");
  //       setModalVisible(true);
  //     }
  //   } else {
  //     // No se ejecuta la solicitud al servidor si los datos no son válidos
  //     alert('Por favor, complete todos los campos correctamente.');
  //   }
  //   // clearInput();
  // }