/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

 //get array of length 25
 var itemArray = new Array(25).fill('empty')

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      randomNumber: '',
      isScratched: false
    }
    
  }
 
  componentDidMount(){
    
    //generate random number method
    // this.setState({ randomNumber: this.generateRandomNumber() })
    this.generateRandomNumber();
  }

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({ randomNumber: randomNumber, isScratched: true });
    return randomNumber;
  }

  scratchItem(itemNumber){
    //decide lucky or unlucky
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = 'lucky'
    } else {
      itemArray[itemNumber] = 'unlucky'
    }

    this.forceUpdate();
  }

  scratchItemIcon = (itemNumber) => {
    //Find right icon  
    if (itemArray[itemNumber] === "lucky") {
      return "$";
    } else if (itemArray[itemNumber] === "unlucky"){
      return ":(";
    } else {
      return "o"
    }
  }

  scratchItemColor = () => {
    //Find right color  
  }

  showAllItem = () => {
    //show all item
    itemArray.fill('unlucky');
    itemArray[this.state.randomNumber] = 'lucky'

    this.forceUpdate();
  }

  resetGame = () => {
    //reset game
    this.setState({ randomNumber: this.generateRandomNumber()}, 
    () => {
      itemArray.fill('empty');
      this.forceUpdate();
    }
    )
  }

  render(){
    return (
      <View style={ styles.container }>
        <View>
          <Text>Scratch and Win game</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(0)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(0)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(1)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(1)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(2)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(2)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(3)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(3)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(4)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(4)} </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(5)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(5)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(6)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(6)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(7)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(7)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(8)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(8)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(9)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(9)} </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(10)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(10)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(11)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(11)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(12)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(12)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(13)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(13)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(14)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(14)} </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(15)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(15)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(16)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(16)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(17)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(17)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(18)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(18)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(19)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(19)} </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(20)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(20)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(21)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(21)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(22)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(22)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(23)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(23)} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => this.scratchItem(24)}>
              <Text style={{ fontSize: 20 }}>{this.scratchItemIcon(24)} </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.showBtn} onPress={() => this.showAllItem}>
          <Text style={styles.btnText}>Show All coupons</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reset} onPress={() => this.resetGame}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    
  },
  itemRow: {
    flexDirection: 'row'
  },
  item:{
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    minWidth: 70
  },
  showBtn: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 20
  },
  reset: {
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 20
  },
  btnText: {
    color: 'white',
    fontSize: 20
  }
});

export default App;
