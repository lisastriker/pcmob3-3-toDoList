import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from "expo-file-system";

const db = SQLite.openDatabase("notes.db"); //Opens this function and save it as a file
console.log(FileSystem.documentDirectory);
export default function NoteScreen({navigation,route}){ //u get an object rows which contains an obj array
  
  const [arrayItem, setArrayItem] = useState([]);
   //Set up database on first run since pass empty array it runs once
   useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS notes
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          done INT)
        `
        );
      },
      null,
      refreshNotes
    );
  }, []);

  function refreshNotes() {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM notes",
        null,
        (txObj, { rows: { _array } }) => setArrayItem(_array),
        (txObj, error) => console.log(`Error: ${error}`)
      );
    });
  } //FUnction comes back with array result
 


    //useEffect procs when route.params.text is added //db.transaction((tx) => {}, null, refreshNotes)
    useEffect(() => {
      if (route.params?.text) {
        db.transaction(
          (tx) => {
            tx.executeSql("INSERT INTO notes (done, title) VALUES (0, ?)", [
              route.params.text,
            ]);
          },
          null,
          refreshNotes
        );
      }
    }, [route.params?.text]);

    function addNote(){
      navigation.navigate("Modal");
    }
    function renderItem({item}){
    return <View style={{
      padding:10,
      paddingTop:10,
      paddingBottom:10,
      borderBottomColor:"black",
      borderBottomWidth:1,
    }}><Text>{item.title}</Text></View>
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
        <FlatList style={{width:"100%"}} 
        data={arrayItem}
         renderItem={renderItem} 
         keyExtractor={(item)=>item.id.toString()}></FlatList>
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
  