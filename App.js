import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite';
import NoteStack from './NoteStack'
import { TextInput } from 'react-native-gesture-handler';

const db = SQLite.openDatabase("db.db"); //Opens this function and save it as a file


const RootStack = createStackNavigator();

function ModalScreen({navigation}){
  const [inputText, setText] = useState(null)

  function addText(text){
    console.log(text)
  }
  return(
  <View>
    <TextInput value={inputText} onChangeText={inputText=>setText(inputText)} 
    onSubmitEditing={() => {
      addText(inputText);
      setText(null);
    }} placeholder="Input task"></TextInput>
    <Button onPress={()=>navigation.goBack()} title="Dismiss"></Button>
    <Text>Modal Screen</Text>
  </View>
  )
}
export default function App() { //<RootStack.Screen name="Modal" component={ModalScreen}/>
  
return (
    <NavigationContainer>
    <RootStack.Navigator>
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
});
