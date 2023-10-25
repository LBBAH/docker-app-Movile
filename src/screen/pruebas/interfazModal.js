import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class infoCurso extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            telefono: '',
            correo: '',
            errors: {
                nombre: '',
                telefono: '',
                correo: '',
            },
        };
    }

    handleNombreChange = (nombre) => {
        this.setState({ nombre });
        this.validateField('nombre', nombre);
    };

    handleTelefonoChange = (telefono) => {
        this.setState({ telefono });
        this.validateField('telefono', telefono);
    };

    handleCorreoChange = (correo) => {
        this.setState({ correo });
        this.validateField('correo', correo);
    };

    validateField = (fieldName, value) => {
        const { errors } = this.state;

        if (fieldName === 'nombre') {
            errors.nombre = value.trim() === '' ? 'El nombre es obligatorio' : '';
        } else if (fieldName === 'telefono') {
            errors.telefono = !/^\d{10}$/.test(value)
                ? 'El teléfono debe tener exactamente 10 dígitos'
                : '';
        } else if (fieldName === 'correo') {
            errors.correo = !/^\S+@\S+\.\S+$/.test(value) ? 'El correo no es válido' : '';
        }

        this.setState({ errors });
    };

    handleSubmit = () => {
        // Realizar acciones adicionales, como enviar datos a un servidor
        console.log('Datos válidos. Enviando...');
    };

    render() {
        const { errors } = this.state;

        return (
            <View>
                <Text>Nombre:</Text>
                <TextInput
                    value={this.state.nombre}
                    onChangeText={this.handleNombreChange}
                />
                <Text style={styles.errorText}>{errors.nombre}</Text>

                <Text>Teléfono:</Text>
                <TextInput
                    value={this.state.telefono}
                    onChangeText={this.handleTelefonoChange}
                />
                <Text style={styles.errorText}>{errors.telefono}</Text>

                <Text>Correo:</Text>
                <TextInput
                    value={this.state.correo}
                    onChangeText={this.handleCorreoChange}
                />
                <Text style={styles.errorText}>{errors.correo}</Text>

                <Button title="Enviar" onPress={this.handleSubmit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
    },
});

export default infoCurso;
