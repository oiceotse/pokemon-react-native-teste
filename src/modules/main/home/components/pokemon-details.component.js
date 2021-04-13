import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

const renderActivityIndicator = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <ActivityIndicator size={60} color={'#ec1d24'} />
  </View>
);

const divider = (title, information) => (
  <View style={styles.dividerContainer}>
    <View style={styles.dividerHeader}>
      <Text style={styles.dividerTitle}>{title}</Text>
    </View>
    <View style={styles.dividerContentContainer}>
      <Text style={styles.dividerContent}>{information}</Text>
    </View>
  </View>
);

const PokemonDetailsComponent = props => {
  const {isLoading, failure, pokemonDetails, detailPokemon} = props;
  const {pokemon} = props.route.params;
  const pokemonImageSource =
    pokemonDetails?.sprites.other['official-artwork'].front_default;

  useEffect(() => {
    setTitleWithPokemonName();
    detailPokemon(pokemon?.url);
  }, []);

  const setTitleWithPokemonName = () => {
    props.navigation.setOptions({
      headerTitle: props.route.params.pokemon.name.toUpperCase(),
    });
  };

  const header = () => (
    <View style={styles.headerContainer}>
      <Image style={styles.imageStyle} source={{uri: pokemonImageSource}} />
    </View>
  );

  const content = () => (
    <View>
      {divider('Espécie', pokemonDetails?.species.name)}
      {divider('Peso', pokemonDetails?.weight)}
      {divider('Altura', pokemonDetails?.height)}
    </View>
  );

  if (isLoading) return renderActivityIndicator();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor={'#ec1d24'} animated />
      {header()}
      {content()}
    </ScrollView>
  );
};

export default PokemonDetailsComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    elevation: 1,
    borderColor: 'transparent',
    flexGrow: 1,
    paddingTop: 10,
  },
  headerContainer: {height: 300},
  imageStyle: {flex: 1, resizeMode: 'contain'},
  dividerContainer: {
    width: '90%',
    marginVertical: 8,
  },
  dividerHeader: {
    padding: 5,
    paddingLeft: 10,
    height: 40,
    backgroundColor: '#ec1d24',
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    marginVertical: 5,
  },
  dividerTitle: {fontSize: 22, color: '#FFF', flex: 1},
  dividerContentContainer: {
    padding: 5,
  },
  dividerContent: {
    fontSize: 20,
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
