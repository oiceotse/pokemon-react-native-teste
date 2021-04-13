import {ComicDetailsComponent} from '../components';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectors, operations} from '../store';
import {PokemonDetailsComponent} from '../components';

const mapStateToProps = state => ({
  isLoading: selectors.detailPokemonState.detailPokemonStatus(state).isLoading,
  isLoaded: selectors.detailPokemonState.detailPokemonStatus(state).isLoaded,
  failure: selectors.detailPokemonState.detailPokemonStatus(state).failure,
  pokemonDetails: selectors.detailPokemonState.detailPokemonResult(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      detailPokemon: operations.detailPokemon,
    },
    dispatch,
  );

class PokemonDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PokemonDetailsComponent {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonDetailsContainer);
