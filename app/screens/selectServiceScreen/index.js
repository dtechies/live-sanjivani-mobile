import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, TitleBox, Screen} from 'components';
import {Dropdown} from 'react-native-element-dropdown';
import {size, color} from 'theme';

import * as styles from './styles';
export const SelectServiceScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const service = [
    {label: 'All', value: 'all'},
    {label: 'Get Medicine Reminder', value: 'get medicine reminder'},
    {label: 'Get Appointment Reminder', value: 'get appointment reminder'},
  ];
  return (
    <SafeAreaView style={styles.container()}>
      <TitleBox
        titleTx={'select_service_screen.title_select_service'}
        titleContainerStyle={styles.titleTextContainer()}
      />
      <Screen bounces={false} contentContainerStyle={styles.screenContainer()}>
        <Dropdown
          data={service}
          labelField="label"
          valueField="value"
          placeholder={'Select Services'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(160)}
          containerStyle={styles.dropdownContainer()}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx={'select_service_screen.next'}
          onPress={() =>
            navigation.navigate('bottomStackNavigation', {
              screen: 'Add',
            })
          }
        />
      </Screen>
    </SafeAreaView>
  );
};
