import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import NoteStack from './NoteStack'

const RootStack = createStackNavigator();

function ModalScreen({navigation}){
  const [text, setText] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <Text style={{ fontSize: 24 }}>What do you want to add?</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(input) => setText(input)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Note", { text })}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
  buttonContainer:{
    flexDirection:"row",
  },
  button: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
    width: 80,
  },
});
