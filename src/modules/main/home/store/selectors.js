export const getPokemonsState = {
  getPokemonsStatus: state => {
    const {isLoading, isLoaded, failure} = state.getPokemonsReducer;
    return {isLoading, isLoaded, failure};
  },
  getPokemonsResult: state => {
    const {resource} = state.getPokemonsReducer;
    return resource;
  },
};

export const detailPokemonState = {
  detailPokemonStatus: state => {
    const {isLoading, isLoaded, failure} = state.detailPokemonReducer;
    return {isLoading, isLoaded, failure};
  },
  detailPokemonResult: state => {
    const {resource} = state.detailPokemonReducer;
    return resource;
  },
};

export const storePokemonsState = {
  getPokemonsStored: state => {
    const {pokemons} = state.storePokemonsReducerPersisted;
    return pokemons;
  },
};
