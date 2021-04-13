import * as types from './types';

export const getPokemonsAction = {
  load: () => ({type: types.GET_POKEMONS.LOAD}),
  success: resource => ({
    type: types.GET_POKEMONS.SUCCESS,
    payload: {resource},
  }),
  failure: error => ({
    type: types.GET_POKEMONS.FAILURE,
    payload: {error},
  }),
  loadMore: () => ({type: types.GET_POKEMONS.LOAD_MORE}),
  loadMoreSuccess: resource => ({
    type: types.GET_POKEMONS.LOAD_MORE_SUCCESS,
    payload: {resource},
  }),
  loadMorefailure: error => ({
    type: types.GET_POKEMONS.LOAD_MORE_FAILURE,
    payload: {error},
  }),
};

export const detailPokemonAction = {
  load: () => ({type: types.DETAIL_POKEMON.LOAD}),
  success: resource => ({
    type: types.DETAIL_POKEMON.SUCCESS,
    payload: {resource},
  }),
  failure: error => ({
    type: types.DETAIL_POKEMON.FAILURE,
    payload: {error},
  }),
};

export const storePokemonsAction = {
  store: resource => ({
    type: types.STORE_POKEMONS.STORE,
    payload: {resource},
  }),
  reset: () => ({
    type: types.STORE_POKEMONS.RESET,
  }),
};
