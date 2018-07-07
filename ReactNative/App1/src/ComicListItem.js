import React, { Component } from 'react';
import {
Image,
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

class ComicListItem extends Component {
  state = {  }
  render() {
    return (
    <View style = {styles.container}>
        <Image
        source = {{uri: 'https://api.techkids.vn/reactnative/media/comic/lokcomic7-chatbeop1/02.jpg'}} style = {styles.image}/>
        <Text style = {styles.text}>LOK Comic #7 - Chất béo (P.1)</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: 220,
        width: Dimensions.get('window').width/2,
    },
    image: {
        height: 175,
    },
    text: {
        fontWeight: "bold",
    },
});
export default ComicListItem;