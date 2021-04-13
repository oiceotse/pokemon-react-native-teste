import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const PokemonFailure = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Falha ao carregar pokemons :'(</Text>
      <Button
        onPress={() => props.getPokemons()}
        color={'#ec1d24'}
        title={'Tentar novamente'}
      />
    </View>
  );
};

export default PokemonFailure;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#A9A9A9',
  },
});
