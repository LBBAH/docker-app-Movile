import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

export function SuccessDialog({ visible, message, onClose }) {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.dialogContainer}>
          <Text style={styles.dialogMessage}>{message}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.dialogButton}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogMessage: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  dialogButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: -1,
  },
});
