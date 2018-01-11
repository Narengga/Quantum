import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginTop: 8
            }}>
                <View style={{ 
                    
                    width: 180, 
                    borderRadius: 50,
                    height: 50, 
                    backgroundColor: 'powderblue' }} >
                    <Text > SUBMIT </Text>
                </View>
            </View>
        );
    }
}

