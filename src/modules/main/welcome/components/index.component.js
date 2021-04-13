import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {CommonActions} from '@react-navigation/native';

import pokemonLogo from '../../../../img/pokemon-logo.png';
import carolDanvers from '../img/pokedex.png';

const IndexComponent = props => {
  props.setViewed();
  const resetAndNavigateToHome = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  };

  const slide1Render = () => (
    <View style={styles.slide1container}>
      <Image source={pokemonLogo} style={styles.logo} />
      <View>
        <Text style={styles.slide1Title}>React Native Teste Compasso</Text>
      </View>
    </View>
  );
  const slide2Render = () => (
    <ImageBackground source={carolDanvers} style={styles.slide2container}>
      <View>
        <Text
          style={{
            fontSize: 30,
            color: '#2f2e96',
            fontWeight: '700',
            marginBottom: 110,
          }}>
          POKÉDEX
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => resetAndNavigateToHome()}
        style={{
          width: 80,
          backgroundColor: '#f8fb05',
          borderRadius: 3,
          paddingVertical: 5,
          borderWidth: 1,
        }}>
        <Text
          style={{color: '#2877fa', fontWeight: 'bold', textAlign: 'center'}}>
          INICIAR
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );

  return (
    <Swiper showsButtons={false} style={styles.wrapper}>
      {slide1Render()}
      {slide2Render()}
    </Swiper>
  );
};
export default IndexComponent;

const styles = StyleSheet.create({
  logo: {resizeMode: 'center', width: 300, height: 100, marginBottom: 35},
  slide1Title: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: '700',
  },
  slide1container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ec1d24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    // padding: 20,
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
