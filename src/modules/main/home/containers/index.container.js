import {IndexComponent} from '../components';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectors, operations} from '../store';

const mapStateToProps = state => ({
  isLoading: selectors.getPokemonsState.getPokemonsStatus(state).isLoading,
  isLoaded: selectors.getPokemonsState.getPokemonsStatus(state).isLoaded,
  failure: selectors.getPokemonsState.getPokemonsStatus(state).failure,
  pokemons: selectors.storePokemonsState.getPokemonsStored(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPokemons: operations.getPokemons,
      loadMorePokemons: operations.loadMorePokemons,
    },
    dispatch,
  );

class IndexContainer extends React.Component {
  render() {
    return <IndexComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
