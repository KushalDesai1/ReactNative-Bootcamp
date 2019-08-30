/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';



export default class App extends React.Component {

  constructor(props){
    super(props);
      this.state= {
        isCross: false,
        winMessage: "",
      }
  }

  drawItem = () => {
    //TODO:decide what to draw: circle or cross or default
  }

  chooseItemIcon = () => {
    //TODO:choose appropriate icon: cross or circle
  }

  chooseItemColor = () => {
    //TODO:choose appropriate color
  }

  resetGame = () => {
    //TODO:reset all values & states
  }

  winGame = () => {
    //TODO: decide/check winner
  }



  render(){
    return (
      <View style={styles.container}>
        <Text>Tic Tac Toe</Text>
      </View>
    );
  }
};

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center'
  }
})
