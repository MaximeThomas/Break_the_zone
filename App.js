import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from 'expo';

import { strings } from './locales/i18n';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignSelf: "center", alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          start={{ x: 0.0, y: -0.35 }} end={{ x: 0.75, y: 1.0 }}
          colors={['#e60099', '#0099cc']}
          //  colors={['#ff3300', '#ffff00']}
          style={styles.gradient}>
          <View style={styles.imageContainer}>
            <Image style={styles.img} source={require('./pictures/Break_the_zone_3.png')} />
          </View>
          <View style={styles.banner}>
            <TouchableWithoutFeedback>
              <View style={styles.button_start}>
                <LinearGradient
                  colors={['#ffff00', '#ffb300']}
                  style={styles.gradient2}>
                  <Text style={styles.text_start}>
                    {strings('start.start')}
                  </Text>
                </LinearGradient>
              </View>
            </TouchableWithoutFeedback>
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
  gradient2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  button_start: {
    width: 200,
    height: 100,
  },
  text_start: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'System',
    color: '#f30000', // Better if I don't find how to add Text stroke
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