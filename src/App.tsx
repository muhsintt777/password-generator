/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {styles} from './AppStyle';
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TextInputChangeEventData,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
          <TextInput value={pwdLengthInp} onChangeText={handleLengthInp} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
