import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class CardBottom extends Component {
    render() {
        return (
            <View>  
            <View style={styles.view1}>
                <View style={styles.thumbnailcontainer}>
                    <Image style={styles.thumbnail} />
                 </View>
                <Text style={styles.text}>{this.props.name}</Text>
                
            </View>
            <View style={styles.view2}>
                <View style={styles.thumbnailcontainer}>
                    <Image style={styles.thumbnail}  />
                </View>
                <Text style={styles.text}>{this.props.name}</Text>

            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view1: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 60,
        paddingTop: 7,
        position: 'relative',
        borderColor: '#c6c6c6',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    view2: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 60,
        paddingTop: 7,
        position: 'relative',
        borderColor: '#c6c6c6',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    text: {
        marginLeft: 10,
        fontSize: 12
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    thumbnailcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 7,
    }
});