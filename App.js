
import React, { useState } from 'react';
import { StyleSheet, StatusBar,Image,Text, TextInput, View, Button, ScrollView, SafeAreaView,Alert, TouchableOpacity, Switch } from 'react-native';

const yourApp= () => {
  const [isOn,toggled]=useState(false);
  const switcher =()=> toggled(previousState=>!previousState);

 
  return (
   
      <View style={styles.container}>
       <Switch value={isOn}
       onValueChange={switcher}
       trackColor={{false:'grey',true:'black'}}
       thumbColor={isOn ? 'red' :'white'}/>
      </View>
     
  );
};

const styles = StyleSheet.create({
 container:{
   justifyContent:'center',
   alignItems:'center',
   flex:1,
 },

});

export default yourApp;
