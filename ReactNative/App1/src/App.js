import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import ComicListScreen from './ComicListScreen';

class App extends Component {
  state = {  }
  render() {
    return (
    <ComicListScreen/>
    );
  }
}

export default App;