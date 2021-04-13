import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import pokebola from '../../img/pokebola.png';

const Pokemon = props => {
  const {navigation, pokemon} = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonDetails', {pokemon: pokemon})}
      style={styles.container}>
      <Image source={pokebola} style={styles.pokebola} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{pokemon.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: 60,
    width: '100%',
    borderColor: 'gray',
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1,
    padding: 5,
  },
  pokebola: {
    width: 25,
    height: 25,
  },
  titleContainer: {flex: 1, paddingLeft: 15},
  titleStyle: {fontSize: 25, textTransform: 'capitalize'},
});
