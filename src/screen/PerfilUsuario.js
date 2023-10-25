import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { ImageBackground, Image } from 'react-native'
import { RutasDePerfilUsuario } from './Main';

import MisDatos from './MisDatos';
import MisCursos from './MisCursos';
import ContraUsuario from './ContraUsuario'

export default function PerfilUsuario({navigation}) {
  const [selectedItem, setSelectedItem] = useState('Mis Datos');

  const handlePress = (item) => {
    setSelectedItem(item);

  };

  return (

    <ScrollView>
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://educacionespecialmx.site/imgAppWeb/istockphoto-1130522927-612x612.jpg'}} style={{padding:40, paddingLeft:20,paddingRight:20}}>
          <Image 
          source={{ uri: 'https://educacionespecialmx.site/imgAppWeb/perfil.jpg'}}                
          style={styles.imageNavigator}
          />           
      </ImageBackground>
      <Text style={styles.userimageNavigator}>
          Viviana José Manuel
      </Text> 
      <RutasDePerfilUsuario />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.menuItem, selectedItem === 'Mis Datos' && styles.selectedItem]}
          onPress={() => handlePress('Mis Datos')}>
          <Text style={[styles.menuText, selectedItem === 'Mis Datos'  && styles.selectedText]}>Mis Datos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, selectedItem === 'Mis Cursos' && styles.selectedItem]}
          onPress={() => handlePress('Mis Cursos')}>
        <Text style={[styles.menuText, selectedItem === 'Mis Cursos' && styles.selectedText]}>Mis Cursos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.menuItem, selectedItem === 'Contraseña' && styles.selectedItem]}
          onPress={() => handlePress('Contraseña')}>
          <Text style={[styles.menuText, selectedItem === 'Contraseña'  && styles.selectedText]}>Contraseña</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Renderiza el contenido correspondiente según la opción seleccionada */}
      <View style={styles.contentContainer}>
        {selectedItem === 'Mis Datos' && <MisDatos />}
        {selectedItem === 'Contraseña' && <ContraUsuario />}
        {selectedItem === 'Mis Cursos' && <MisCursos />}
      </View>
    </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderBottomColor: 'transparent',
  },
  selectedItem: {
    borderBottomWidth: 4,
    borderBottomColor: '#7F00B2',
  },
  menuText: {
    backgroundColor: '#fff',
    fontSize: 18,
    color: '#333',
    letterSpacing: -1,
  },
  selectedText: {
    color: '#BC4ED8',
  },
  imageNavigator: {
      height:100, 
      width:100, 
      borderRadius:50, 
      marginBottom:10,
      position: 'relative',
      top: 90,
      left: 120,
  },
  userimageNavigator:{
      color:'#000000', 
      fontSize:20,      
      padding:20,
      top: 30,
      left: 100,
      marginBottom:30,
      fontWeight: 'bold',
      letterSpacing: -1,
  },
  contentContainer: {
    backgroundColor: '#fff',
    minHeight: 500,
    paddingHorizontal: 10, 
    paddingBottom: 10, 
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});