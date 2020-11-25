
import React from 'react';
import { StyleSheet, StatusBar,Image,Text, TextInput, View, Button, ScrollView, SafeAreaView,Alert, TouchableOpacity } from 'react-native';

const yourApp= () => {
  const onPress = () => {
    Alert.alert('Please Wait');
  }

 
  return (
   
      <View style={styles.container}>
        <View style={styles.touch}>
          <TouchableOpacity style={styles.touchButton} onPress={onPress}>
            <Text style={styles.text}>Click Here</Text>
          </TouchableOpacity>
        </View>

        <View styles={styles.button}>
          <Button
              title="Login"
              color="green"
              onPress={() => Alert.alert('Please Wait')}/>
        </View>
      </View>
     
  );
};

const styles = StyleSheet.create({
 container:{
   justifyContent:'center',
   alignItems:'center',
   flex:1,
 },
touch:{
  paddingBottom:40,
},
 touchButton:{
   alignItems:'center',
   width:100,
   height:25,
   backgroundColor:'blue',
   borderRadius:20,
 },
 button:{
   marginTop:20,
   paddingTop:20,
 },
 text:{
   color:'white',
   fontWeight:'bold',
 }
});

export default yourApp;
