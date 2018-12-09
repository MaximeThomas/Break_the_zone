import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { AppRegistry, Image } from 'react-native';
import { Dimensions, TouchableHighlight } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignSelf: "center", alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          start={{ x: 0.0, y: -0.35 }} end={{ x: 0.75, y: 1.0 }}
          //   locations={[0,0.5,0.6]}
          colors={['#e60099', '#0099cc']}
          //  colors={['#ff3300', '#ffff00']}
          style={styles.gradient}>
          <View style={styles.imageContainer}>
            <Image style={styles.img} source={require('./pictures/Break_the_zone_3.png')} />
          </View>
          <View style={styles.banner}>
            <TouchableHighlight>
              <View style={styles.button_start}>
              </View>
            </TouchableHighlight>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_start: {
    width: 200,
    height: 100,
    borderRadius:20,
    backgroundColor: 'red',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 1.5,
    overflow: 'visible',
  },
  banner:
  {
    flex: 1,
    justifyContent: 'center',
  },
});