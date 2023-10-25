import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScrollView, } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Registro from './Registro';
import IndexCurso from './CursosDetalles/IndexCurso'
import Cursos_page from './BackEnd_Laravel/Cursos_page';
export default function Cursos({ navigation }) {

  const handlePress = () => {
    // navigation.navigate('Registro')
    navigation.navigate("IndexCurso")
    // navigation.navigate('IndexCurso', {screen:"IndexCurso"})
  };

  return (
    <ScrollView style={styles.container}>

      {/* Aquí empieza el contenedor del curso */}
      
      <Cursos_page/>
    
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
  },
  containerCursos: {
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
    marginBottom: 20,


  },
  CajaImagen: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    width: '30%',
    marginLeft: 10,

  },
  CajaInformacion: {
    width: '62%',
    elevation: 0.9,
    shadowColor: '#52006A',

  },

  TamanioImagen: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,

  },

  CajaDescripcion: {
    width: '100%',
    height: '40%',

    paddingLeft: 5,

  },
  CajaIconos: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
  },
  CajaTitulo: {
    width: '100%',
    height: '20%',

    alignItems: 'center',
  },

  IconosCustomXD: {
    color: 'red',
    fontSize: 20,
    paddingLeft: 5
  },

  TextoTitulo: {
    fontFamily: 'Roboto',
    fontSize: 20,
    alignItems: 'center',
    fontWeight: 'bold',

  },
  Descripcion: {
    width: '100%',
    height: 20,
    color: 'gray',
    height: '100%'
  },

  ReaccionesTexto: {
    color: 'gray'
  }

});
