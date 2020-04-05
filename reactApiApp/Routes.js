import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';
import Home from './components/Home';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="Home" component={Home} title="Home" initial={true} />
      <Scene key="PokeList" component={PokeList} title="List" />
      <Scene key="Pokemon" component={Pokemon} title="Pokemon" />
    </Scene>
  </Router>
);
export default Routes;
