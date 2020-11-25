
import React, { useState } from 'react';
import { StyleSheet, StatusBar,Image,Text, TextInput, View, Button, ScrollView, SafeAreaView,Alert, TouchableOpacity, Switch, KeyboardAvoidingView } from 'react-native';

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
  },
  inputText:{
    width:100,
    borderWidth:4,
    height:50,
  },
  bottomText:{
    paddingTop:100,
  },
});

export default yourApp;
