import * as actions from './actions';
import * as services from '../services';

export const getPokemons = () => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(actions.getPokemonsAction.load());
    services.ApiPokemon.getPokemons()
      .then(async res => {
        if (res.ok) {
          const response = await res.json();
          resolve(response);
          const data = response.results;
          dispatch(actions.getPokemonsAction.success(response));
          dispatch(actions.storePokemonsAction.store(data));
        } else {
          reject(res);
          dispatch(actions.getPokemonsAction.failure(res));
        }
      })
      .catch(err => {
        reject(err);
        dispatch(actions.getPokemonsAction.failure(err));
      });
  });
};

export const detailPokemon = url => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(actions.detailPokemonAction.load());
    services.ApiPokemon.detailPokemon(url)
      .then(async res => {
        if (res.ok) {
          const response = await res.json();
          resolve(response);
          dispatch(actions.detailPokemonAction.success(response));
        } else {
          reject(res);
          dispatch(actions.detailPokemonAction.failure(res));
        }
      })
      .catch(err => {
        reject(err);
        dispatch(actions.detailPokemonAction.failure(err));
      });
  });
};

export const loadMorePokemons = () => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(actions.getPokemonsAction.loadMore());
    const prevPokemons = global.store.getState().storePokemonsReducerPersisted
      .pokemons;
    const url = global.store.getState().getPokemonsReducer.resource.next;
    services.ApiPokemon.loadMorePokemons(url)
      .then(async res => {
        if (res.ok) {
          const response = await res.json();
          resolve(response);
          const data = response.results;
          dispatch(actions.getPokemonsAction.loadMoreSuccess(response));
          const newPokemonsList = [...prevPokemons, ...data];
          dispatch(actions.storePokemonsAction.store(newPokemonsList));
        } else {
          reject(res);
          dispatch(actions.getPokemonsAction.loadMorefailure(res));
        }
      })
      .catch(err => {
        reject(err);
        dispatch(actions.getPokemonsAction.loadMorefailure(err));
      });
  });
};
