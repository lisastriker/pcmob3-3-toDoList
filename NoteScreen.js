import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

export default function NoteScreen({navigation}){
    function addNote(){
      navigation.navigate("Modal");
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#FFCF99",
    },
  });
  