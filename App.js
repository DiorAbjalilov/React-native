import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Button,
  Image,
  TextInput,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  LoginContainer: {
    marginTop: 50,
    color: '#000',
    // borderWidth: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  LoginFlex: {
    width: 120,
  },
  TextContainer: {
    color: '#000',
  },
  textTitile: {
    marginTop: 20,
    marginBottom: 5,
    color: '#111',
    fontSize: 18,
  },
  inputText: {
    color: '#000',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  title: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  logoContainer: {
    marginTop: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

const App = () => {
  // const [text1, setText1] = useState('');
  const [text, setText] = useState('');
  const handlePress = () => {
    if (text) {
      alert(`Tasdiqlash linki ${text} emailga yuborildi`);
    } else {
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#111" />
      <View style={styles.logoContainer}>
        <Image source={require('./1.jpg')} style={styles.logo} />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.textTitile}>User:</Text>
        <TextInput style={styles.inputText} placeholder="User" />
        <Text style={styles.textTitile}>Email:</Text>
        <TextInput
          onChangeText={e => setText(e)}
          style={styles.inputText}
          placeholder="Email"
        />
      </View>
      <View style={styles.LoginContainer}>
        <View style={styles.LoginFlex}>
          <Button style={styles.title} title="Log in" />
        </View>
        <View style={styles.LoginFlex}>
          <Button style={styles.title} onPress={handlePress} title="Sig up" />
        </View>
      </View>
    </View>
  );
};
export default App;
