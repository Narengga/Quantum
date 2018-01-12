import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View>  
            <View style={styles.view1}>
                <View style={styles.thumbnailcontainer}>
                    <Image style={styles.thumbnail} source={require('./img/2.png')} />
                 </View>
                    <Text style={styles.text}>31 Jan 2018 & 08:15 AM</Text>
                
            </View>
            <View style={styles.view2}>
                <View style={styles.thumbnailcontainer}>
                    <Image style={styles.thumbnail} source={require('./img/2.png')} />
                </View>
                    <Text style={styles.text}>2nd Option Time</Text>

            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view1: {
        marginTop: 10,
        backgroundColor: '#FFF',
        marginLeft:7,
        marginRight: 7,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 60,
        paddingTop: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        borderColor: '#c96800',
        borderLeftWidth: 2.5,
        position: 'relative'
    },
    view2: {
        marginTop: 7,
        marginBottom: 10,
        backgroundColor: '#FFF',
        marginLeft: 7,
        marginRight: 7,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 60,
        paddingTop: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        borderColor: '#c96800',
        borderLeftWidth: 2.5,
        position: 'relative'
    },
    text: {
        marginLeft: 90,
        fontSize: 12,
        position:'absolute',
    },
    thumbnail: {
        height: 30,
        width: 30
    },
    thumbnailcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
});