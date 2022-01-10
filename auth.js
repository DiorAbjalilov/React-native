import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Toast} from './ToastManager';
export default function Another() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Toast.dark('This is dark Message')}
        style={styles.buttonStyle}>
        <Text>SHOW SOME AWESOMENESS!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 2,
    padding: 10,
  },
});
