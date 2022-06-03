import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SelectCountry} from 'react-native-element-dropdown';

import {Text, Button} from 'components';
import * as styles from './styles';

export const LandingScreen = () => {
  const [languageData, setLanguageData] = useState('');
  const navigation = useNavigation();
  const local_data = [
    {
      value: '1',
      lable: 'English',
    },
    {
      value: '2',
      lable: 'Hindi',
    },
  ];
  return (
    <View style={styles.container()}>
      <SelectCountry
        style={styles.dropdown()}
        selectedTextStyle={styles.selectedTextStyle()}
        placeholderStyle={styles.placeholderStyle()}
        maxHeight={85}
        alignItems="center"
        value={languageData}
        data={local_data}
        valueField="value"
        labelField="lable"
        placeholder="Select Language"
        onChange={e => {
          setLanguageData(e.value);
        }}
      />
      <Button
        buttonStyle={styles.button()}
        buttonText={styles.buttonTxt()}
        nameTx={'landing_screen.get_started'}
        onPress={() => navigation.navigate('authStackNavigation')}
      />
    </View>
  );
};
