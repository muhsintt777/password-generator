/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {styles} from './AppStyle';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const App = (): JSX.Element => {
  const [password, setPassword] = useState<string | null>(null);
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

  function onResetPress() {
    setPassword(null);
    setPwdLength('');
    setOptions({upperCase: false, lowerCase: false, specialChar: false});
  }

  function onCreatePress() {
    let longString = '';
    if (options.upperCase) longString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.lowerCase) longString += 'abcdefghijklmnopqrstuvwxyz';
    if (options.specialChar) longString += '!@#$%&*()_-+=';
    const password = generatePassword(longString);
    setPassword(password);
  }

  function generatePassword(longString: string): string {
    let password = '';
    for (let i = 0; i < Number(pwdLengthInp); i++) {
      const randomIndex = Math.floor(Math.random() * longString.length);
      password += longString[randomIndex];
    }
    return password;
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
            isChecked={options.upperCase}
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
            isChecked={options.lowerCase}
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
            isChecked={options.specialChar}
            fillColor="green"
            unfillColor="white"
            onPress={(isChecked: boolean) =>
              handleOptionChange('specialChar', isChecked)
            }
          />
        </View>

        <View style={styles.actionButtonContainer}>
          <TouchableOpacity
            style={[styles.createBtn, styles.actionButton]}
            onPress={onCreatePress}>
            <Text style={styles.actionButtonTxt}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.resetBtn, styles.actionButton]}
            onPress={onResetPress}>
            <Text style={styles.actionButtonTxt}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <Text style={styles.password} selectable>
            {password}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
