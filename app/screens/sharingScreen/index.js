import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MultiSelect} from 'react-native-element-dropdown';

import {Text, Screen, InputBox, Button} from 'components';
import {serviceListData} from 'json';
import {size, color, IcSearch, IcDown} from 'theme';
import * as styles from './styles';

export const SharingScreen = () => {
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [selected, setSelected] = useState([]);
  const [extra, setExtra] = useState(0);
  const [emailVal, setEmailVal] = useState('');
  // useEffect(() => {
  //   console.log('selected', selected);
  // }, [selected]);
  return (
    <SafeAreaView style={styles.full()}>
      <Screen style={styles.container()}>
        <Text
          style={styles.textItemToShare()}
          tx="sharing_screen.select_item_to_share"
        />
        <MultiSelect
          data={serviceListData}
          labelField="serviceName"
          valueField="serviceName"
          placeholder={'Select items'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.placeHolderStyle()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(180)}
          containerStyle={styles.dropdownContainer()}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          renderRightIcon={() => (
            <IcDown
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill={color.cornBlue}
            />
          )}
          flatListProps={{
            bounces: false,
          }}
          value={selected}
          onChange={item => {
            setSelected(item);
          }}
        />
        <Text
          style={styles.textItemToShare()}
          tx="sharing_screen.select_individual"
        />
        <InputBox
          placeholder={'Enter email'}
          value={emailVal}
          onChangeText={val => {
            setEmailVal(val);
            setExtra(extra + 1);
          }}
          inputStyle={[styles.labelFieldText()]}
          mainContainerStyle={styles.inputMainContainer()}
          // rightIcon={
          //   <IcSearch
          //     height={size.moderateScale(20)}
          //     width={size.moderateScale(20)}
          //     fill={color.purple}
          //   />
          // }
        />
        <View style={styles.row()}>
          <Button
            onPress={() => {
              emailVal.length > 0
                ? alert('Send Pdf')
                : alert('Email Required!!');
            }}
            nameTx="sharing_screen.send_pdf"
            buttonStyle={styles.addButtonStyle()}
            buttonText={styles.textAddButton()}
          />
          <Button
            nameTx="sharing_screen.download"
            buttonStyle={styles.addButtonStyle()}
            buttonText={styles.textAddButton()}
          />
        </View>
      </Screen>
    </SafeAreaView>
  );
};
