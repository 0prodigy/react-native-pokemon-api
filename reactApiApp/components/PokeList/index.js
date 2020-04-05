import React, {PureComponent} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

export default class PokeList extends PureComponent {
  state = {
    pokeList: [],
    loading: true,
  };
  async componentDidMount() {
    try {
      const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const pokemon = await pokemonApiCall.json();
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({pokeList: pokemon.results, loading: false});
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }

  renderItem(data) {
    return (
      <TouchableOpacity style={{backgroundColor: 'transparent'}}>
        <View style={styles.listItemContainer}>
          <Text style={styles.pokeItemHeader}>{data.item.name}</Text>
          <Image
            source={{
              uri:
                'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg',
            }}
            style={styles.pokeImage}
          />
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const {pokeList, loading} = this.state;
    if (!loading) {
      return (
        <FlatList
          data={pokeList}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.name}
        />
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}
