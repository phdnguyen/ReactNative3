import React , {Component} from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import Block from './Block';

class App extends Component {
    state = { }
    render() {
        return (
              <ImageBackground source={{uri: 'https://monclercheap.xyz/wp-content/uploads/data/2018/2/15/PIC-XFC074607.jpg'}} style={style.background}>
                <Text style = {style.headline}>Schedule</Text>
                <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Western_Hockey_League.svg/1200px-Western_Hockey_League.svg.png'}} style = {{height: 120, width: 160}}/>            
                <Text style={style.title}> Western Hockey League 2018 </Text>
                <View style = {{height: 50}}></View>
                <View style = {style.allBlocks}>
                  
                  <Block
                    team1Name = 'Portland'
                    team1Link = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Portland_Winterhawks_Logo.svg/1200px-Portland_Winterhawks_Logo.svg.png'
                    team2Name = 'Seattle'
                    team2Link = 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Seattle_Thunderbirds_logo.svg/1200px-Seattle_Thunderbirds_logo.svg.png'
                    time      = 'June 6th, 7:00 PM'             
                  />

                  <Block
                    team1Name = 'Swift Current'
                    team1Link = 'https://upload.wikimedia.org/wikipedia/en/4/42/SwiftCurrentBroncos.PNG'
                    team2Name = 'Victoria'
                    team2Link = 'https://upload.wikimedia.org/wikipedia/en/7/7b/VictoriaRoyals.PNG'
                    time      = 'June 7th, 9:00 PM'
                  />

                  <Block
                    team1Name = 'Regina'
                    team1Link = 'https://upload.wikimedia.org/wikipedia/en/d/d0/Regina_Pats_logo.png'
                    team2Name = 'Kooteney'
                    team2Link = 'https://upload.wikimedia.org/wikipedia/en/4/49/Kootenay_ICE.png'
                    time      = 'June 8th, 9:00 PM'
                  />



                </View>

              </ImageBackground>    
        );
    }
}

const style = StyleSheet.create({
  background:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headline:{
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
  },
  title:{
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  allBlocks:{
    height: 320,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  block:{
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
export default App;