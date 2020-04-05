/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import PokeList from './components/PokeList';
// import Home from './components/Home';

const App = () => {
  return (
    // <Home />
    <ScrollView style={styles.container}>
      <Text style={styles.pokeListHeader}>Pokemon API</Text>
      <PokeList style={styles.pokeListHeader} />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pokeListHeader: {
    fontSize: 20,
    color: '#fff',
  },
});
