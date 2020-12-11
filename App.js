import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import NoteStack from './NoteStack'
import { TextInput } from 'react-native-gesture-handler';




const RootStack = createStackNavigator();

function ModalScreen({navigation}){
  const [inputText, setText] = useState("")


  //use effect monitors route inputText in navigate is in curly braces because it must be sent as obj
  return(
  <View style={styles.container}>
    <TextInput style={styles.textInput} value={inputText} onChangeText={(input)=>setText(input)} 
    placeholder="Input task"></TextInput>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
      <Text>Dismiss</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Note",{ inputText })}>
      <Text>Save</Text>
    </TouchableOpacity>
  <Text>{inputText}</Text>
  </View>
  )
}
export default function App() { //<RootStack.Screen name="Modal" component={ModalScreen}/>
  
return (
    <NavigationContainer>
    <RootStack.Navigator mode="modal" headerMode="none">
    <RootStack.Screen name="Note" component={NoteStack}/>
    <RootStack.Screen name="Modal" component={ModalScreen}/>
    </RootStack.Navigator>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#FFCF99",
  },
  textInput:{
    borderWidth:1,
    width:"80%"
  },
  buttton:{
    flexDirection:"row",
  },
});
