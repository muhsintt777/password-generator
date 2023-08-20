/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {styles} from './AppStyle';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const App = (): JSX.Element => {
  const [pwdLengthInp, setPwdLength] = useState<string>('');

  // function handleLengthInp(e: TextInputChangeEventData) {
  //   console.log(e);
  // }

  function handleLengthInp(newText: string) {
    console.log(newText);
    setPwdLength(newText); // Update the state with the new text
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Password Generator</Text>
        </View>
        <View style={styles.pwdLength}>
          <Text style={styles.label}>Length</Text>
          <TextInput
            style={styles.lengthInp}
            value={pwdLengthInp}
            onChangeText={handleLengthInp}
            placeholder="eg: 8"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.checkInpContainer}>
          <Text style={styles.label}>Add Uppercase</Text>
          <BouncyCheckbox fillColor="green" unfillColor="white" />
        </View>
        <View style={styles.checkInpContainer}>
          <Text style={styles.label}>Add Lowercase</Text>
          <BouncyCheckbox fillColor="green" unfillColor="white" />
        </View>
        <View style={styles.checkInpContainer}>
          <Text style={styles.label}>Add Special Chars</Text>
          <BouncyCheckbox fillColor="green" unfillColor="white" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
