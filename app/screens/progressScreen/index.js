import React, {useState, useRef, useEffect} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {Text, Button, Screen, InputBox} from 'components';
import {size, IcHeart, color, IcTick, IcPlus} from 'theme';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import 'react-native-gesture-handler';

import {categoriesData} from 'json';
import * as styles from './styles';
export const ProgressScreen = props => {
  const navigation = useNavigation();
  const modalRef = useRef();
  const [showAll, setShowAll] = useState(false);
  const [categoriesValue, setCategoriesValue] = useState('');
  const [extra, setExtra] = useState(0);
  const [data, setData] = useState([]);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (props.route.params) {
      setShowAll(props.route.params.showAll);
    }
  }, []);
  return (
    <SafeAreaView style={styles.full()}>
      <Screen
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={!showAll && styles.containContainerStyle()}
        style={styles.container()}>
        {!showAll && (
          <Button
            onPress={() => {
              setShowAll(true);
            }}
            buttonStyle={styles.showAllButton()}
            nameTx={'progress_screen.show_all'}
          />
        )}
        {showAll && (
          <View>
            {categoriesData.map((item, index) => {
              return (
                <Pressable
                  onPress={() => {
                    setData(item);
                    modalRef.current.open();
                  }}
                  style={styles.categoriesListContainer()}>
                  <View style={styles.row()}>
                    {item.icon && (
                      <IcHeart
                        height={size.moderateScale(20)}
                        width={size.moderateScale(20)}
                        fill={color.red}
                      />
                    )}
                    <Text style={styles.textCategoryTitle()}>{item.title}</Text>
                  </View>
                  <View style={styles.row()}>
                    <Text style={styles.textCategoryTitle()}>{item.count}</Text>
                    <Text style={styles.textCategoryTitle()}>{item.unit}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        )}
        <Portal>
          <Modalize
            ref={modalRef}
            adjustToContentHeight={true}
            handlePosition={'inside'}
            scrollViewProps={{
              showsVerticalScrollIndicator: false,
              contentContainerStyle: styles.modalContentContainerStyle(),
            }}
            modalStyle={styles.modalStyle()}
            handleStyle={styles.dragStyle()}>
            <View>
              <Text style={styles.modalTitleText()}>{data.title}</Text>
              <View style={styles.inputRowView()}>
                <InputBox
                  titleStyle={styles.textInputTitle()}
                  placeholder={data.title}
                  value={categoriesValue}
                  onChangeText={value => {
                    setCategoriesValue(value);
                    setExtra(extra + 1);
                  }}
                  inputStyle={[styles.labelFieldText()]}
                  mainContainerStyle={styles.inputMainContainer()}
                />
                <Text style={[styles.textCategoryTitle()]}>{data.unit}</Text>
              </View>
              <Pressable
                onPress={() => setFav(!fav)}
                style={styles.addFavoriteView()}>
                <View style={styles.tickIconView()}>
                  <IcTick
                    height={size.moderateScale(12)}
                    width={size.moderateScale(12)}
                    fill={fav ? color.purple : color.transparent}
                  />
                </View>
                <Text
                  style={styles.textAddToFavorite()}
                  tx={'progress_screen.add_to_favorite'}
                />
              </Pressable>
              <Button
                onPress={() => modalRef.current.close()}
                nameTx="appointment_reminder_screen.add"
                buttonStyle={styles.addButtonStyle()}
                buttonText={styles.textAddButton()}
                leftIcon={
                  <IcPlus
                    height={size.moderateScale(20)}
                    width={size.moderateScale(20)}
                    fill={color.black}
                  />
                }
              />
            </View>
          </Modalize>
        </Portal>
      </Screen>
    </SafeAreaView>
  );
};
