
import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const PerfilScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Foto de Perfil</Text>
          <TouchableOpacity>
            <Text style={styles.cambiarText}>Cambiar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.itemContainer}>
          <Text style={styles.text}>Foto de Portada: </Text>
          <TouchableOpacity>
            <Text style={styles.cambiarText}>Cambiar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.itemContainer1}>
          <Text style={styles.text}>Detalles</Text>
          <View style={styles.cambiarButtonContainer}>
            <TouchableOpacity>
              <Text style={styles.cambiarText}>Cambiar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>Nombre Usuario: CameWI2002</Text>
          <Text style={styles.text1}>Telefono: +52 7731293010</Text>
          <Text style={styles.text1}>Correo: cameron43@gmail.com</Text>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.itemContainer}>
          <Text style={styles.text}>Recuperación de cuenta</Text>
          <TouchableOpacity></TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity>
            <Text style={styles.cambiarText}>Establecer pregunta secreta</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 15,
    
  },
  container: {
    width: "104%", // Define un ancho para el contenedor
    alignSelf: "center", // Centra el contenedor horizontalmente
    
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContainer1: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 20,
    
  },
  cambiarButtonContainer: {
    alignSelf: "flex-end",
  },
  cambiarText: {
    color: "#4AB7FE",
    fontWeight: 'bold',
  },
  text: {
    color: "#000",
    fontSize: 20,
    letterSpacing: -1,
    paddingBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  text1: {
   
    fontSize: 20,
    marginTop: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default PerfilScreen;
