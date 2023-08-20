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
  const [options, setOptions] = useState({
    upperCase: false,
    lowerCase: false,
    specialChar: false,
  });

  function handleLengthInp(newText: string) {
    console.log(newText);
    setPwdLength(newText);
  }

  function handleOptionChange(
    option: 'upperCase' | 'lowerCase' | 'specialChar',
    isChecked: boolean,
  ) {
    console.log(isChecked);
    setOptions(prev => ({...prev, [option]: isChecked}));
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
          <BouncyCheckbox
            fillColor="green"
            unfillColor="white"
            onPress={(isChecked: boolean) =>
              handleOptionChange('upperCase', isChecked)
            }
          />
        </View>
        <View style={styles.checkInpContainer}>
          <Text style={styles.label}>Add Lowercase</Text>
          <BouncyCheckbox
            fillColor="green"
            unfillColor="white"
            onPress={(isChecked: boolean) =>
              handleOptionChange('lowerCase', isChecked)
            }
          />
        </View>
        <View style={styles.checkInpContainer}>
          <Text style={styles.label}>Add Special Chars</Text>
          <BouncyCheckbox
            fillColor="green"
            unfillColor="white"
            onPress={(isChecked: boolean) =>
              handleOptionChange('specialChar', isChecked)
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
