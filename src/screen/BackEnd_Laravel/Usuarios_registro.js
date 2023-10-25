import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal'
import { REGISTRO_USUARIO_URL } from '../apis/Api';

const CorreoValido = (email) => {
    // Puedes usar una expresión regular o una librería de validación de correo electrónico
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Usuarios_registro = () => {
    const [name, setNombre] = useState("");
    const [nameUser, setnameUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [nombreProducto, setnombreProducto] = useState("");
    const [precioProdcuto, setprecioProdcuto] = useState("");


    // Estado para rastrear la validación de los campos
    const [isValidNombre, setIsValidNombre] = useState(true);
    const [isValidNameUser, setIsValidNameUser] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);

    const [isModalVisible, setModalVisible] = useState(false);
    const [serverResponse, setServerResponse] = useState('');



    const addUsuario = async () => {
        const obj = { name, email, password, phone, nameUser };
        // const obj = { nombreProducto, precioProdcuto};
        try {
            // if (CorreoValido(obj)) {
            if (isValidData()) {
                const response = await axios.post(REGISTRO_USUARIO_URL, obj);
                console.log(response.data);
                const repuestaServidor = response.data
                // Alert.alert(repuestaServidor)
                // Ahora, muestra la respuesta en un Alert
                Alert.alert('Respuesta del servidor', JSON.stringify(repuestaServidor));
                // Puedes manejar la respuesta aquí, por ejemplo, mostrar un mensaje de éxito

                setServerResponse(JSON.stringify(response.data)); // Actualiza la respuesta del servidor
                setModalVisible(true); // Muestra el modal
            } else {
                // No se ejecuta la solicitud al servidor si los datos no son válidos
                alert('Por favor, complete todos los campos correctamente.');
            }
        } catch (error) {
            console.error(error);
            console.error(error.message);
            // Puedes manejar los errores aquí, por ejemplo, mostrar un mensaje de error
        }
        // clearInput();
    }

    const isValidEmail2 = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const isValidData = () => {
        // Realiza todas las validaciones necesarias aquí
        const isNombreValid = name.trim() !== "";
        const isNameUserValid = nameUser.trim() !== "";
        const isEmailValid = isValidEmail2(email);
        const isPasswordValid = password.length >= 6;
        const isPhoneValid = phone.length == 10;

        setIsValidNombre(isNombreValid);
        setIsValidNameUser(isNameUserValid);
        setIsValidEmail(isEmailValid);
        setIsValidPassword(isPasswordValid);
        setIsValidPhone(isPhoneValid)
        return isNombreValid && isNameUserValid && isEmailValid && isPasswordValid && isPhoneValid;
    }

    const clearInput = () => {
        setNombre("");
        setEmail("");
        setPassword("");
        setPhone("");
        setnameUser("");

        setprecioProdcuto("");
        setnombreProducto("");
    }

    return (
        <View>
            <Text>NOMBRE:</Text>
            <TextInput
                placeholder="Nombre"
                value={name}
                onChangeText={text => setNombre(text)}
                style={isValidNombre ? styles.validInput : styles.invalidInput}
            />
            <Text>CORREO:</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={isValidEmail ? styles.validInput : styles.invalidInput}
            />
            <Text>CONTRASEÑA:</Text>
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry // Esto oculta la entrada para contraseñas
                style={isValidPassword ? styles.validInput : styles.invalidInput}
            />
            <Text>PHONE:</Text>
            <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={text => setPhone(text)} // Debes utilizar setPhone para actualizar el estado de phone
                style={isValidPhone ? styles.validInput : styles.invalidInput}
            />

            <Text>Name User:</Text>
            <TextInput
                placeholder="NameUser"
                value={nameUser}
                onChangeText={text => setnameUser(text)} // Debes utilizar setnameUser para actualizar el estado de nameUser
                style={isValidNameUser ? styles.validInput : styles.invalidInput}
            />
            <Button title="Agregar Usuario" onPress={addUsuario} />

            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <Text>Respuesta del servidor:</Text>
                    <Text>{serverResponse}</Text>
                    <Button title="Cerrar Modal" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    validInput: {
        borderColor: 'green',
        borderWidth: 1,
    },
    invalidInput: {
        borderColor: 'red',
        borderWidth: 1,
    },
});

export default Usuarios_registro;
