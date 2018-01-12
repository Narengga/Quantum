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
import Title from "./Title";
import Card from './Card';
import CardBottom from './CardBottom';

import DatePage from './DatePage';
import { StackNavigator } from 'react-navigation';

export default class ChoosePage extends Component<{}> {
    render() {
        const { navigation } = this.props;
        return (
            <View  >
              <Title name="PICK DATE AND TIME OPTION" />
              <Card />
              <Title name="PICK DATE AND TIME OPTION" />
              <CardBottom />
              <TouchableHighlight
                style={styles.submit}
                underlayColor='#000'
                onPress={() => navigation('Date')}
                title="Go to Second Screen">
                <Text style={styles.text}>Submit</Text>
              </TouchableHighlight>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 12,
        color: '#fff'
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
        backgroundColor: '#2dc42d',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    }
});
AppRegistry.registerComponent('ChoosePage', () => App);
