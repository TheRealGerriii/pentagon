/*
* File: App.js
* Author: Hermányi Gergely
* Copyright: 2022, Hermányi Gergely
* Group: Szoft II N
* Date: 2022-01-12
* Github: https://github.com/TheRealGerriii/
* Licenc: GNU GPL
*/
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {

  const [sideA, setSideA] = useState();
  const [terulet, setTerulet] = useState();

  function handleCalcButton() {
    let tenylegesTerulet = Math.pow(sideA, 2) * Math.sqrt( 25 + 10 * Math.sqrt(5) ) / 4;
    setTerulet(tenylegesTerulet.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text>Ötszög számoló</Text><br></br>

      <TextInput style={styles.input} onChangeText={sideA => setSideA(sideA)} placeholder='A oldal'/><br></br>

      <TouchableHighlight
          style={styles.runButton}
          onPress={handleCalcButton}
          >
          <Text style={styles.runText}>Számol</Text>
      </TouchableHighlight><br></br>

      <Text>Ötszög területe: {terulet}</Text>

      <Text style={styles.footer}>Készítette: Hermányi Gergely <br></br> Készült: 2022-01-12</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  runButton: {
    backgroundColor: 'blue',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
  },
  runText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  },
  input: {
    backgroundColor: 'yellow',
  },
  footer: {
    paddingTop: 300,
  }
});
