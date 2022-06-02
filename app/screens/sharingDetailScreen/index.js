import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MultiSelect} from 'react-native-element-dropdown';

import {Text, Screen, InputBox, Button, Header, MedicalItems} from 'components';
import {serviceListData} from 'json';
import {size, color, IcSearch, IcDown, SearchValNew} from 'theme';
import * as styles from './styles';

export const SharingDetailScreen = props => {
  const navigation = useNavigation();
  const [emailVal, setEmailVal] = useState('');
  const [emailCorrect, setEmailCorrect] = useState('');
  const [extra, setExtra] = useState(0);
  const [sharingData, setSharingData] = useState([]);
  const [sharingId, setSharingId] = useState('');

  const emailValidation = () => {
    {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(emailVal) === false) {
        setEmailCorrect('Enter valid email');
        return false;
      } else {
        setEmailCorrect('');
      }
    }
  };

  useEffect(() => {
    if (props.route.params.selectedItems) {
      setSharingData(props.route.params.selectedItems);
      console.log(props.route.params.selectedItems);
      // setSharingData(selectedItems);
    }
    const data = props.route.params.selectedItems;
    const id = data.map(i => i.id);
    // console.log(
    //   'id',
    //   data.map(i => i.id),
    // );
    setSharingId(id);
  }, []);

  return (
    <SafeAreaView style={styles.container()}>
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        text={sharingData.length + '  Items selected'}
      />

      <Screen withScroll>
        <View style={styles.rowListView()}>
          {sharingData.map((item, index) => {
            let Icon = item.svg;
            // console.log('item', item);
            return (
              // <View></View>
              <MedicalItems
                key={index.toString()}
                containerStyle={styles.listViewStyle()}
                nameFirst={item.value}
                nameSecond={item.name}
                nameThird={item.unit}
                svgCardItems={item.icon}
                isSelected={item.selectedCard}
              />
            );
          })}
        </View>
        <Text
          style={styles.textItemToShare()}
          tx="sharingDetail_screen.shareTo"
        />
        <InputBox
          value={emailVal}
          onChangeText={val => {
            setEmailVal(val);
            setEmailCorrect('');
            setExtra(extra + 1);
          }}
          mainContainerStyle={styles.inputMainContainer()}
          inputStyle={styles.labelFieldText()}
          placeholder={'Please Enter Email'}
          placeholderTextColor={color.black}
        />
        {emailCorrect ? (
          <Text style={styles.textValidation()} text={emailCorrect} />
        ) : null}
        <View style={styles.row()}>
          <Button
            onPress={() => {
              emailValidation();
              // emailVal ? navigation.goBack() : onAddPressValidation();
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
