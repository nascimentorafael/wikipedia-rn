import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { isUserAuthenticated } from '../redux/actions/Authentication';
import CustomTextInput from '../components/CustomTextInput';
import s from '../styles/WikiSearchContainer';
import { search } from '../redux/actions/Wikipedia';

const SearchBar = ({ onPressSearch, onTextChange }) => (
  <View style={s.searchBarWrapper}>
    <CustomTextInput
      placeholder="search anything here!"
      onChangeText={onTextChange}
      containerStyle={s.input}
    />
    <Button
      onPress={onPressSearch}
      title={'Search'}
      color="blue"
    />
  </View>
);

export const renderSearchedItems = (items = []) => {
  return (
    items.map(({ title, image }, i) => (
      <SearchItem
        title={title}
        image={image}
        key={`item-${i}`}
      />
    ))
  );
}

const SearchItem = ({ title, image }) => (
  <View style={{ flex:1, flexDirection: 'row'}}>
    <Image
      source={{ uri: image }}
      style={{ height: 50, width: 50 }}
    />
    <Text style={s.itemTitle}>
      {title}
    </Text>
  </View>
);

class WikiSearch extends Component {
  state = {
    seachText: 'Hungary',
    searchResult: {
      title: '',
      items: [],
    },
  };

  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.navigation.navigate('AuthenticationContainer');
    }
  }

  onPressSearch = () => {
    this.props.search(this.state.seachText)
    .then((response) => {
      console.log(response);
      this.setState({ searchResult: response, seachText: '' });
    });
  }

  render() {
    return (
      <View>
        <SearchBar
          onPressSearch={this.onPressSearch}
          onTextChange={(seachText) => this.setState({seachText})}
        />
        <ScrollView style={s.searchItemsWrapper}>
          {renderSearchedItems(this.state.searchResult.items)}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: isUserAuthenticated(state),
});

export default connect(
  mapStateToProps,
  {
    search,
  },
)(WikiSearch);