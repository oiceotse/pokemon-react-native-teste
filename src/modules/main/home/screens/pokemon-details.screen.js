import React from 'react';

import {PokemonDetailsContainer} from '../containers';

export default class PokemonDetailsScreen extends React.Component {
  render() {
    return <PokemonDetailsContainer {...this.props} />;
  }
}
