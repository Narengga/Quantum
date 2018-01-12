/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Title from "./src/Title";
import Card from './src/Card';
import CardBottom from './src/CardBottom';

import DatePage from './src/DatePage';
import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      <DatePage/>
      </View>
      // <View  >
      //   <Title name="PICK DATE AND TIME OPTION" />
      //   <Card />
      //   <Title name="PICK DATE AND TIME OPTION" />
      //   <CardBottom />
      //   <TouchableHighlight
      //     style={styles.submit}
      //     underlayColor='#000'
      //     onPress={() => navigation('Date')}
      //     title="Go to Second Screen">
      //     <Text style={styles.text}>Submit</Text>
      //   </TouchableHighlight>
      // </View>
    );
  }
}
var styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 12
  },
  container: {
  },    
  isyana: {
        flex: 1,
      },
  submit: {
    marginRight: 65,
    marginLeft: 65,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  }
    });
AppRegistry.registerComponent('App', () => App);
