import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';




// const API_Usuarios_all = "http://localhost:8000/api/Usuarios";
const API_Usuarios_all = "http://localhost:8000/api/SomeO_Usuarios";
// const API_get_Usuario = "http://localhost:8000/api/getUser/92";


export default function Usuarios_all() {
    const [listaUsuarios, setUsuarios] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    useEffect(() => {
        // get_Todos()
        get_Todos(paginaActual)
    }, [])

    const get_Todos = async (pagina) => {
        try {
            const { data } = await axios.get(API_Usuarios_all, {
                params: {
                    page: pagina,
                },
            });
            const { data: usuarios } = data;
            setUsuarios(usuarios);
        } catch (error) {
            console.error(error);
        }
    }

    const cargarSiguientePagina = () => {
        // Puedes ajustar la lógica para cargar la siguiente página aquí
        // Por ejemplo, incrementar la página actual y llamar a get_Todos con la nueva página
        const nuevaPagina = paginaActual + 1;
        setPaginaActual(nuevaPagina);
        get_Todos(nuevaPagina);
    }


    return (
        <View>
            <Text>Lista de Usuarios:</Text>
            <FlatList
                data={listaUsuarios}
                keyExtractor={(item) => item.id.toString()} // Asegúrate de que id sea una propiedad única
                renderItem={({ item }) => (
                    <View>
                        <Text>ID: {item.id}</Text>
                        <Text>Nombre: {item.name}</Text>
                        <Text>Email: {item.email}</Text>
                    </View>
                )}
            />
            {/* <Button title="Cargar siguiente página" onPress={cargarSiguientePagina} /> */}
        </View>
    );


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

