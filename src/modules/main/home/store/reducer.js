import * as types from './types';
import storage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const GET_POKEMONS_INITIAL_STATE = {
  isLoading: false,
  isLoaded: false,
  failure: null,
  isLoadingMore: false,
  isLoadedMore: false,
  failureLoadMore: false,
  resource: null,
};

export const getPokemonsReducer = (
  state = GET_POKEMONS_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case types.GET_POKEMONS.LOAD:
      return {
        ...GET_POKEMONS_INITIAL_STATE,
        isLoading: true,
        resource: state.resource,
      };
    case types.GET_POKEMONS.SUCCESS:
      return {
        ...GET_POKEMONS_INITIAL_STATE,
        isLoaded: true,
        resource: action.payload.resource,
      };
    case types.GET_POKEMONS.FAILURE:
      return {
        ...GET_POKEMONS_INITIAL_STATE,
        failure: action.payload.error,
        resource: state.resource,
      };
    case types.GET_POKEMONS.LOAD_MORE:
      return {
        ...GET_POKEMONS_INITIAL_STATE,
        isLoadingMore: true,
        resource: state.resource,
      };
    case types.GET_POKEMONS.LOAD_MORE_SUCCESS:
      return {
        ...GET_POKEMONS_INITIAL_STATE,
        isLoadedMore: true,
        resource: action.payload.resource,
      };
    case types.GET_POKEMONS.LOAD_MORE_FAILURE:
      return {
        ...GET_POKEMONS_INITIAL_STATE,
        failureLoadMore: action.payload.error,
        resource: state.resource,
      };
    default:
      return state;
  }
};

const DETAIL_POKEMON_INITIAL_STATE = {
  isLoading: false,
  isLoaded: false,
  failure: null,
  resource: null,
};

export const detailPokemonReducer = (
  state = DETAIL_POKEMON_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case types.DETAIL_POKEMON.LOAD:
      return {
        ...DETAIL_POKEMON_INITIAL_STATE,
        isLoading: true,
      };
    case types.DETAIL_POKEMON.SUCCESS:
      return {
        ...DETAIL_POKEMON_INITIAL_STATE,
        isLoaded: true,
        resource: action.payload.resource,
      };
    case types.DETAIL_POKEMON.FAILURE:
      return {
        ...DETAIL_POKEMON_INITIAL_STATE,
        failure: action.payload.error,
      };
    default:
      return state;
  }
};

const STORE_POKEMONS_INITIAL_STATE = {
  pokemons: [],
};

const storePokemonsReducer = (state = STORE_POKEMONS_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.STORE_POKEMONS.STORE:
      return {
        pokemons: action.payload.resource,
      };
    case types.STORE_POKEMONS.RESET:
      return {
        ...STORE_POKEMONS_INITIAL_STATE,
      };

    default:
      return state;
  }
};

export const storePokemonsReducerPersisted = persistReducer(
  {key: 'storePokemonsReducer', storage},
  storePokemonsReducer,
);
