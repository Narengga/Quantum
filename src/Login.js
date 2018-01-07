import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';



const windowScreen = Dimensions.get('window');
const remote = 'http://hdqwalls.com/wallpapers/city-blurred-hd.jpg';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline',
      textUsername: 'Mobile Number / Email',
      textPassword: 'Password',
    };
  }
  render() {
    const resizeMode = 'center';

    return (

      <View style={ styles.isyana }>

      <Image source={require('./img/background.jpg')}  style={styles.raisya}/>
      <View style={ styles.tatjana }>
        <Image source={require('./img/logo.png')}  style={styles.logoNazi}/>
        <View style={{paddingLeft:50,paddingRight:50,flex:1,}}>
          <View style={styles.input_rounded}>
            <Image source={require('./img/inputusername.png')}  style={styles.input_rounded_img}/>
             <TextInput
              placeholder={this.state.textUsername}
              underlineColorAndroid='transparent'
              placeholderTextColor="#fff" 
              style={styles.input_rounded_text}
              />
          </View>

          <View style={styles.input_rounded}>
            <Image source={require('./img/inputpassword.png')}  style={styles.input_rounded_img}/>
             <TextInput
              placeholder={this.state.textPassword}
              underlineColorAndroid='transparent'
              placeholderTextColor="#fff" 
              style={styles.input_rounded_text}
              />
          </View>
          <TouchableHighlight
            style={styles.chelseaIslan}
            onPress={() => this.submitSuggestion(this.props)}
            underlayColor='#fff'>
              <Text style={styles.submitText}>Login</Text>
          </TouchableHighlight>
          <View style={{flex: 1, flexDirection: 'row',marginTop: 20,}}>
            <Text style={{flex:1, backgroundColor: 'rgba(52, 52, 52, 0)', color: 'white', textAlign: 'left', paddingLeft: 10,}} >Create Account</Text>
            <Text style={{flex:1, backgroundColor: 'rgba(52, 52, 52, 0)', color: 'white', textAlign: 'right', paddingRight: 10,}} >Forgot Password</Text>
          </View>
         

        </View>
         
      </View>
        
       
      </View>
     
    );

  }
}
var styles = StyleSheet.create({
      isyana: {
        flex: 1,
      },

      raisya: {
        flex: 1,
    // remove width and height to override fixed static size
        width: null,
        height: null,
      },

      tatjana: {
        position : 'absolute',
        marginTop: 60,
        top: 0, left: 0, right: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      chelseaIslan:{
        flex: 1,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#009688',
        borderRadius:20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
       signupbtn:{
        flex: 1,
        marginRight:60,
        marginLeft:60,
        marginTop:5,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#e91e63',
        borderRadius:30,
        borderWidth: 1,
        borderColor: '#fff'
      },
      submitText:{
          color:'#fff',
          textAlign:'center',
          marginLeft:5,
          marginRight:5,
      },
      logoNazi:{
        width: 170,
        height: 200,
      },
      input_rounded:{
        paddingLeft: 50,
        marginTop: 10,
        height: 50,
        width: windowScreen.width-(windowScreen.width/5),
        borderRadius: 20 ,
        backgroundColor : "#f5fcff4a"
      },
      input_rounded_text:{
        
        textAlign: 'left',
        height: 50,
        color: 'white',


       
      },
      input_rounded_img:{
        marginLeft: 10,
        marginTop: 8,
        width:30,
        height:30,
        position:'absolute',
      }
    });
AppRegistry.registerComponent('Login', () => Login);