/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard
} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      resultValue: '0.0'
    }
  }

  buttonPressed(currency){
    if(this.state.inputValue === ''){
      alert("Enter some currency")
    } else {

      let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];

      this.setState({ resultValue: result.toFixed(2) })


    }
  }

  dismissKeyboard(){
    Keyboard.dismiss()
  }
  
  render(){
    return (
      <TouchableWithoutFeedback onPress={ () => this.dismissKeyboard() }>
        <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>
              {this.state.resultValue}</Text>   
          </View>


          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              selectionColor="#FFF"
              keyboardType="numeric"
              placeholder="Enter value"
              placeholderTextColor='#ffffff'
              value={this.state.inputValue}
              onChangeText={ text => this.setState({ inputValue: text })}/>
          </View>

          <View style={styles.converterButtonContainer}>
            <TouchableOpacity style={styles.converterButton} onPress={ () => this.buttonPressed("DOLLAR") }>
              <Text style={styles.converterButtonText}>$</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.converterButton} onPress={ () => this.buttonPressed("EURO") }>
              <Text style={styles.converterButtonText}>Euro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.converterButton} onPress={ () => this.buttonPressed("POUND") }>
              <Text style={styles.converterButtonText}>POUND</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.converterButton} onPress={ () => this.buttonPressed("RUBEL") }>
              <Text style={styles.converterButtonText}>RUBEL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.converterButton} onPress={ () => this.buttonPressed("AUSDOLLAR") }>
              <Text style={styles.converterButtonText}>AUSDOLLAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.converterButton} onPress={ () => this.buttonPressed("CANDOLLAR") }>
              <Text style={styles.converterButtonText}>CANDOLLAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.converterButton} onPress={ () => this.buttonPressed("YEN") }>
              <Text style={styles.converterButtonText}>YEN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.converterButton} onPress={ () => this.buttonPressed("DINAR") }>
              <Text style={styles.converterButtonText}>DINAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.converterButton} onPress={ () => this.buttonPressed("BITCOIN") }>
              <Text style={styles.converterButtonText}>BITCOIN</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  screenView:{
    flex: 1,
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 2,
    backgroundColor: 'blue',
  },
  resultValue: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  inputContainer: {
    marginTop: 20,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#c1c1c1',
    backgroundColor: 'blue'
  },
  input: {
    color: '#fff',
    fontSize: 30
  },
  converterButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A79DF',
    height: 70,
    borderColor: '#fff',
    borderWidth: 2,
    width: '33.3%'
  },
  converterButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
});
