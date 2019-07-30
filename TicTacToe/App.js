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
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Header, Content, Button, Text } from 'native-base';

export default class App extends React.Component {

  constructor(props){
    super(props);
      this.state= {

      }
  }

  render(){
    return (
      <Button bordered success>
            <Text>Success</Text>
          </Button>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
});

