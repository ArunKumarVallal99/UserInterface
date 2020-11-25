
import React, { useState } from 'react';
import { StyleSheet, StatusBar,Image,Text, TextInput, View, Button, ScrollView, SafeAreaView,Alert, TouchableOpacity, Switch, KeyboardAvoidingView, TouchableHighlight } from 'react-native';

const yourApp= () => {
  const [isOn,toggled]=useState(false);
  const switcher =()=> toggled(previousState=>!previousState);

 
  return (
    
      <KeyboardAvoidingView
      behavior={"position",'padding'}
      style={styles.keyboardView}
      >
      
        <View style={styles.container}>

          <Switch value={isOn}
            onValueChange={switcher}
            trackColor={{false:'grey',true:'black'}}
            thumbColor={isOn ? 'red' :'white'}/>

          <View style={styles.inputTextView}>
            <TextInput style={styles.inputText}
              underlineColorAndroid='black'
            />
          </View>

          <TouchableHighlight style={styles.touchableHighlight} onPress={()=>Alert.alert('You Have Pressed The Button')}>
            <Text style={styles.loginText}>Login</Text>
              </TouchableHighlight>

          <Text style={styles.bottomText}>HI</Text>

        </View>
 
      </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
  keyboardView:{
    flex:1,
    flexDirection:'column',
  },  
  container:{
    justifyContent:'center',
    alignItems:'center',
  },
  inputTextView:{
    paddingTop:300,
    paddingBottom:20,
  },
  inputText:{
    width:100,
    borderWidth:4,
    height:50,
  },
  touchableHighlight:{
    backgroundColor:'blue',
    width:150,
    height:40,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
  bottomText:{
    paddingTop:100,
  },
});

export default yourApp;
