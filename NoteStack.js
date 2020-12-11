import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import NoteScreen from './NoteScreen'
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

export default function NoteStack(){
 // <Stack.Screen name="Modal" component={ModalScreen}></Stack.Screen> Why can't i put modal under this stack.
  return(
      <Stack.Navigator>
      <Stack.Screen options={{
        title:"To-do App",
        headerStyle:{backgroundColor:"FFC07F"},
        headerTintColor:"#FFFFFF",
        headerTitleStyle:{
          color:"black",
          textAlign:"center",
          shadowColor:"black",
          shadowOpacity:0.5,
          shadowRadius:0.2,
        }
        }}  name="Note" component={NoteScreen}/>    
      </Stack.Navigator>
  )
}
