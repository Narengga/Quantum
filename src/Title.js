import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#c6c6c6',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    text: {
        marginLeft: 10,
        fontSize: 12
    }
});