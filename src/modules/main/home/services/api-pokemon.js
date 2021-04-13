import Config from 'react-native-config';

const BASE_URL = Config.POKEMON_API_BASE_URL;

export const getPokemons = async () => {
  return await fetch(`${BASE_URL}/pokemon/`);
};

export const detailPokemon = async url => {
  return await fetch(`${url}`);
};

export const loadMorePokemons = async url => {
  return await fetch(`${url}`);
};
