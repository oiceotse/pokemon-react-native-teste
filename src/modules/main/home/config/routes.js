import {IndexScreen, PokemonDetailsScreen} from '../screens';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: 'Pokemons',
          headerStyle: {backgroundColor: '#2f2e96'},
          headerTintColor: '#FFF',
        }}
        component={IndexScreen}
      />
      <Stack.Screen
        name="PokemonDetails"
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: '#ec1d24'},
          headerTintColor: '#FFF',
        }}
        component={PokemonDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
