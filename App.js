import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite';
import { Ionicons } from '@expo/vector-icons';


function NoteScreen({navigation}){
  function addNote(){
    console.log("Hello")
  }
  //headerRight () because its a return
  useEffect(()=> {
    navigation.setOptions({
      headerRight:()=>(
        <TouchableOpacity onPress={addNote}>
          <Ionicons name="ios-create-outline" size={24} style={{marginRight:10,}}></Ionicons>
        </TouchableOpacity>
      )
    })
  })
  return(
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}


const Stack = createStackNavigator(); //I want headerStyle to not have color.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{
        title:"To-do App",
        headerStyle:{backgroundColor:"FFC07F"},
        headerTintColor:"#FFFFFF",
        headerTitleStyle:{
          color:"black",
          fontWeight:24,
          textAlign:"center",
          shadowColor:"black",
          shadowOpacity:0.5,
          shadowRadius:0.2,
        }
        }}  name="Note" component={NoteScreen}/>
      
      </Stack.Navigator>

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
