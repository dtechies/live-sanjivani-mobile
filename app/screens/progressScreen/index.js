import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, BackHandler, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MultiSelect} from 'react-native-element-dropdown';

import {Text, Screen, InputBox, Button, Header, MedicalItems} from 'components';
import {serviceListData, SharingData} from 'json';
import {size, color, IcSearch, IcDown} from 'theme';
import * as styles from './styles';

export const ProgressScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);
  const [extra, setExtra] = useState(0);
  const [favItem, setFavItem] = useState([]);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(true);
  // const [extra, setExtra] = useState(0);
  const [sharingData, setSharingData] = useState(SharingData);
  // useEffect(() => {
  //   console.log('SharingData =>>', SharingData);
  // }, [selected]);
  const clearData = () => {
    sharingData.map((val, i) => {
      SharingData[i].selectedCard = false;
    });
    setExtra(extra + 1);
  };
  // useEffect(() => {
  //   const backAction = () => {

  //     Alert.alert('Hold on!', 'Are you sure you want to Exit App?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  return (
    <SafeAreaView style={styles.container()}>
      <Header
        isColor={true}
        isHeading={true}
        title={'progress_screen.progress'}
      />
      <Screen withScroll>
        {first && (
          <View>
            <View style={styles.row()}>
              {sharingData.map((item, index) => {
                let Icon = item.svg;
                return (
                  <MedicalItems
                    key={index + 'MedicalItems'}
                    onPress={() => {
                      sharingData[index].selectedCard = !item.selectedCard;
                      setExtra(extra + 1);
                    }}
                    containerStyle={styles.listViewStyle()}
                    nameFirst={item.value}
                    nameSecond={item.name}
                    nameThird={item.unit}
                    svgCardItems={<Icon />}
                    isSelected={item.selectedCard}
                  />
                );
              })}
            </View>
            <Button
              buttonStyle={styles.button()}
              buttonText={styles.buttonTxt()}
              nameTx={'progress_screen.addFav'}
              onPress={() => {
                let data = sharingData.filter(val => val.selectedCard == true);
                setFavItem(data);
                setFirst(false);
                clearData();
              }}
            />
          </View>
        )}
        {!first ? (
          <View>
            <View style={styles.row()}>
              {favItem.map((item, index) => {
                // console.log('item', item);
                let Icon = item.svg;
                return (
                  <MedicalItems
                    key={index + 'MI'}
                    onPress={() => {
                      setTimeout(() => {
                        navigation.navigate('progressDetailScreen', {
                          selectedItems: item,
                        });
                      }, 100);
                      // sharingData[index].selectedCard = !item.selectedCard;
                      // setExtra(extra + 1);
                    }}
                    containerStyle={styles.listViewStyle()}
                    nameFirst={item.value}
                    nameSecond={item.name}
                    nameThird={item.unit}
                    svgCardItems={<Icon />}
                    // isSelected={item.selectedCard}
                  />
                );
              })}
            </View>
            <Button
              buttonStyle={styles.button()}
              buttonText={styles.buttonTxt()}
              nameTx={'progress_screen.selectFav'}
              onPress={() => {
                if (first == false) {
                  let data = sharingData.filter(
                    val => val.selectedCard == true,
                  );
                  setFavItem(data);
                  setFirst(true);
                }
              }}
            />
          </View>
        ) : null}
      </Screen>
    </SafeAreaView>
  );
};
