import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            source={require('./image/shareit.png')}
            style={styles.imageSh}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{marginHorizontal: 20}}>
              <Image
                style={styles.bellImage}
                source={require('./image/bell.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.plusImage}>
                <Image
                  style={styles.plus}
                  source={require('./image/plus.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.flexOne}>
        <View style={styles.sendFileContainer}>
          <Image
            style={styles.imageSend}
            source={require('./image/senImage.png')}
          />
        </View>
        <View style={styles.sendFileText}>
          <Image
            style={styles.imageText}
            source={require('./image/footerText.png')}
          />
        </View>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.imageScroll}
              source={require('./image/scroll.png')}
            />
            <Image
              style={styles.imageScroll}
              source={require('./image/scroll.png')}
            />
          </View>
        </ScrollView>
      </View>
      <View style={{alignItems: 'center', paddingVertical: 10}}>
        <Image
          style={{width: '80%', height: 50}}
          source={require('./image/footerTab.png')}
        />
      </View>
    </View>
  );
};

export default App;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfc',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  bellImage: {
    width: 30,
    height: 30,
  },
  plusImage: {
    width: 27,
    height: 27,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 25,
    height: 25,
  },
  imageSh: {
    width: 110,
    height: 30,
  },
  flexOne: {
    flex: 1,
  },
  senAllContainer: {},
  sendFileContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  sendFileText: {
    alignItems: 'center',
    marginBottom: 10,
  },
  imageSend: {
    width: '70%',
    height: 80,
  },
  imageText: {
    width: '90%',
    height: 30,
  },
  imageScroll: {
    width: '90%',
    height: windowHeight / 2.3,
    // width: '90%',
    // height: windowHeight/ 2.4
  },
});
