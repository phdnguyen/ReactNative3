import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import {data} from './database.json'; 
import ComicListItem from './ComicListItem';

class ComicListScreen extends Component {
  state = {  }
  keyExtractor = (item, index) => item.id
  renderItem = ({item}) => <ComicListItem/>
  render() {
    return (
    <FlatList
    data = {data}
    renderItem = {this.renderItem}
    numColumns = '2'
    keyExtractor = {this.keyExtractor}
    />
    );
  }
}

export default ComicListScreen;