import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function ContraUsuario() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cambiar Contraseña</Text>
      <Text style={styles.text}>Contraseña Actual</Text>
      <TextInput style={styles.TextInput}
        secureTextEntry={true}
        value={"actualContra"}
        onChangeText={(text) => setCurrentPassword(text)}
      />
      <Text style={styles.text}>Nueva Contraseña</Text>
      <TextInput style={styles.TextInput}
        secureTextEntry={true}
        value={"nuevaContra"}
        onChangeText={(text) => setNewPassword(text)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4B21C3',
    borderRadius: 20,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: -1,
  },
  TextInput: {
    backgroundColor: '#FAFAFA',
    borderColor: '#8C8C8C',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 300,
    marginBottom: 10,
    lineHeight: 1.2,
  },
  titulo: {
    fontWeight: 'bold',
    padding: 20,
    fontSize: 23,
    textAlign: 'center',
    letterSpacing: -1,
  },
  text: {
    color: '#000',
    fontSize:20,
    textAlign: 'left',
    letterSpacing: -1,
    paddingBottom: 10,
    marginTop: 10,
  }
});
