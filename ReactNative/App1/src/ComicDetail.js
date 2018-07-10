import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

class ComicDetail extends Component {
  state = {  }
  render() {
    return (
      <FlatList
      data = {this.props.navigation.state.param.comic.photos}
      renderItem = {(item) => <Image source = {{uri : item}}
      style = {{height: 200}}/>}
      numColumns = '1'
      keyExtractor={(item) => item}
      />
    );
  }
}

export default ComicDetail;