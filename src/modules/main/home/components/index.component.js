import React, {useEffect} from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Pokemon, PokemonFailure} from './high-order-components';

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

const IndexComponent = props => {
  const {isLoading, failure, pokemons, loadMorePokemons} = props;

  useEffect(() => {
    props.getPokemons();
  }, []);

  const renderItem = ({item}) => (
    <Pokemon navigation={props.navigation} pokemon={item} />
  );

  if (isLoading) return renderActivityIndicator();
  if (pokemons.length == 0 && failure) return <PokemonFailure {...props} />;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#2f2e96'} animated />
      <FlatList
        onEndReachedThreshold={0.7}
        contentContainerStyle={styles.flatListContainer}
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        onEndReached={() => {
          loadMorePokemons();
        }}
      />
    </View>
  );
};

export default IndexComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  header: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {flexGrow: 1},
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
