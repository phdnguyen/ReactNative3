import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Block extends Component {
  state = {  }
  render() {
    return (
        <TouchableOpacity style ={style.container}>
        <View>
          <Text style = {style.time}>{this.props.time}</Text>
        </View>
        
        <View style ={style.teams}>
          <Image source ={{uri: this.props.team1Link}} style={{ height: 65, width: 80 }} />
          <Text style={style.teamName}>{this.props.team1Name}</Text>
          <Text style={style.teamName}>{this.props.team2Name}</Text>
          <Image source ={{uri: this.props.team2Link}} style={{ height: 65, width: 80 }} />
        
        </View>
      
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({

    container:{
        flexDirection: 'row',
        height: 100,
        width: 350,
        backgroundColor: 'darkslategrey',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15
      },
      time:{
        color: 'white',
        fontSize: 16,
        fontFamily: 'Avenir-Book'
      },
      teams:{
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      teamName:{
        color: 'white',
        width: 90,
        textAlign: 'center',
        fontFamily: 'Avenir-Book',
        fontSize: 16,
        flexDirection: 'column',
      }


});
export default Block;