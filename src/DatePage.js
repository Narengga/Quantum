import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    TouchableHighlight
} from 'react-native';
import Dates from 'react-native-dates';
import moment from 'moment';
import Title from "./Title";

export default class DatePage extends Component<{}> {
    state = {
        date: null,
        focus: 'startDate',
        startDate: null,
        endDate: null
    }
    render() {
        const isDateBlocked = (date) =>
            date.isBefore(moment(), 'day');

        const onDatesChange = ({ startDate, endDate, focusedInput }) =>
            this.setState({ ...this.state, focus: focusedInput }, () =>
                this.setState({ ...this.state, startDate, endDate })
            );

        const onDateChange = ({ date }) =>
            this.setState({ ...this.state, date });
        return (
            <View >
                <Dates
                    onDatesChange={onDatesChange}
                    isDateBlocked={isDateBlocked}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    focusedInput={this.state.focus}
                    range
                />

                {this.state.date && <Text style={styles.date}>{this.state.date && this.state.date.format('LL')}</Text>}
                <Title name="CHOOSE AVAILABLE TIME" />
                <View style={styles.view2}>
                    <View style={{ position: 'absolute',marginLeft:10, marginTop: 31,justifyContent: 'flex-start' }}>
                        <Text style={{ textAlign: 'left' }}>09.00 AM</Text>
                    </View>
                    <View style={{ position: 'absolute', marginLeft: 300, marginTop: 31}}>
                        <Text >10.00 AM</Text>
                    </View>
                    <View style={{ justifyContent: 'center'}}>

                        <TouchableHighlight
                        style={styles.submit}
                        underlayColor='#000'
                        title="Go to Second Screen">
                            <Text style={{ textAlign: 'center', color: '#fff'}}>13.00 AM</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <TouchableHighlight
                    style={styles.submit2}
                    underlayColor='#000'
                    title="Go to Second Screen">
                    <Text style={{ textAlign: 'center', color:'#fff' }}>GO TO SECOND OPTION</Text>
                </TouchableHighlight>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        marginTop: 20
    },
    submit: {
        marginRight: 110,
        marginLeft: 110,
        marginTop:10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#ff911c',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submit2: {
        marginRight: 80,
        marginLeft: 80,
        marginTop: 20,
        paddingTop: 17,
        paddingBottom: 17,
        backgroundColor: '#2dc42d',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff'
    },
    date: {
        marginTop: 50
    },
    view2: {
        
        backgroundColor: '#FFF',
        height: 80,
        borderColor: '#c6c6c6',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    focused: {
        color: 'blue'
    }
});
AppRegistry.registerComponent('DatePage', () => DatePage);