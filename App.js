import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#111',
  },
  LoginFlex: {
    flex: 2,
    // padding: 24,
    borderWidth: 1,
    backgroundColor: '#eee',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View style={styles.LoginFlex}>
        <Text> Log in </Text>
        <Text> Sig in </Text>
      </View>
    </View>
  );
};
export default App;
