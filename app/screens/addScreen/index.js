import React, {useState, useEffect} from 'react';
import {View, Pressable, SafeAreaView, TextInput} from 'react-native';
import {Text, Screen, InputBox, Button, Header} from 'components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getReminderOption, getAllCategoryAndSubCategory} from 'redux-actions';

import {size, color, IcPlus, IcHeart} from 'theme';

import {size, color, IcPlus, IcBack} from 'theme';
import {addServiceData, AddNavData} from 'json';
import * as styles from './styles';

export const AddScreen = props => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [extra, setExtra] = useState(0);
  const [noteVal, setNoteVal] = useState(null);
  const [noteValErr, setNoteValErr] = useState('');
  const [showTakeNote, setShowTakeNote] = useState(false);
  const [show, setShow] = useState(true);
  const [addSelected, setAddSelected] = useState(false);
  const params = props.route.params && props.route.params.showType;
  const [data, setData] = useState(addServiceData);

  const clearData = () => {
    data.map((val, i) => {
      data[i].selected = false;
    });
    addServiceData.map((val, i) => {
      addServiceData[i].selected = false;
    });
    setExtra(extra + 1);
  };

  useEffect(() => {
    clearData();
  }, []);

  const validation = () => {
    if (noteVal == ' ' || noteVal == null) {
      setNoteValErr('Please Enter medical journal details');
    } else {
      setShow(true);
      setShowTakeNote(false);
    }
  };
  return (
    <SafeAreaView style={styles.full()}>
      <Header
        isColor={true}
        isClose={false}
        isLogo={false}
        isLongArrowLeft={false}
        isLogoCenter={false}
        isHeading={true}
        isBlue={false}
        isCamera={false}
        title={'add_screen.title'}
      />
      <Screen withScroll style={styles.container()}>
        {/* {(params === 'get medicine reminder' || params === 'all') && (
          <Button
            onPress={() => navigation.navigate('medicationReminderScreen')}
            nameTx="add_screen.add_medication"
            buttonStyle={styles.addReminderButtonStyle()}
            buttonText={styles.textAddAppointment()}
            leftIcon={
              <IcPlus
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.black}
              />
            }
          />
        )}
        {reminderOption.is_appointment_reminder === 1 && (
          <Button
            onPress={() => navigation.navigate('appointmentReminderScreen')}
            nameTx="add_screen.add_appointment"
            buttonStyle={styles.addReminderButtonStyle()}
            buttonText={styles.textAddAppointment()}
            leftIcon={
              <IcPlus
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.black}
              />
            }
          />
        )}

        {categoryWithSubCategoryData &&
          categoryWithSubCategoryData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <View>
                <Pressable
                  key={index.toString()}
                  style={styles.listView()}
                  onPress={() => {
                    if (item.navigateScreen) {
                      navigation.navigate(item.navigateScreen);
                    } else if (isActive) {
                      setActiveIndex(null);
                    } else {
                      setActiveIndex(index);
                      setExtra(extra + 1);
                    }
                  }}>
                  <Text style={styles.categoryName()}>{item.name}</Text>
                </Pressable>
                {isActive &&
                  item.subcategories.map((subcategories, subIndex) => {
                    return (
                      <Pressable
                        style={styles.subCategoriesRow()}
                        onPress={() =>
                          navigation.navigate('progressScreen', {
                            subCategory: subcategories,
                          })
                        }>
                        {/* <Image
                          // resizeMode="cover"
                          source={subcategories.icon}
                          style={styles.subCateGoryIcon()}
                        /> */}
                        <IcHeart
                          height={size.moderateScale(20)}
                          width={size.moderateScale(20)}
                          fill={color.red}
                        />
                        <Text style={styles.subItemText()}>
                          {subcategories.name}
                        </Text>
                        <Text style={styles.subItemUnitText()}>
                          {subcategories.unit}
                        </Text>
                      </Pressable>
                    );
                  })}
              </View>
            );
          })}

            <Button
              onPress={() => {
                setShow(true);
                setShowTakeNote(false);
              }}
              nameTx="appointment_reminder_screen.add"
              buttonStyle={styles.addButtonStyle()}
              buttonText={styles.textAddButton()}
            />
          </View>
        )} */}
        <View style={styles.mainCard()}>
          {data.map((item, index) => {
            return (
              <Pressable
                onPress={() => {
                  if (
                    item.name == 'Vitals' ||
                    item.name == 'Measurements' ||
                    item.name == 'Activity'
                  ) {
                    setTimeout(() => {
                      // clearData();
                      // console.log('selected', data[index].selected);
                      navigation.navigate('addDetailsScreen', {
                        title: item.name,
                        sub: item.subCategory,
                      });
                    }, 500);
                  }
                  if (item.name == 'Care giver') {
                    clearData();
                    setTimeout(() => {
                      navigation.navigate('careGiver');
                    }, 500);
                  }
                  if (item.name == 'Appointments') {
                    clearData();
                    setTimeout(() => {
                      navigation.navigate('appointmentReminderScreen');
                    }, 500);
                  }
                  if (item.name == 'Symptoms check') {
                    clearData();
                    setTimeout(() => {
                      navigation.navigate('symptomsScreen');
                    }, 500);
                  }
                  if (item.name == 'Others') {
                    clearData();
                    setTimeout(() => {
                      navigation.navigate('otherScreen');
                    }, 500);
                  }
                  if (item.name == 'Medication') {
                    clearData();
                    setTimeout(() => {
                      navigation.navigate('medicationReminderScreen');
                    }, 500);
                  }
                  clearData();
                  data[index].selected = !item.selected;
                  setExtra(extra + 1);
                }}
                style={styles.addNavStyle(item.selected)}
                key={index + 'addMedication'}>
                <Text
                  text={item.name}
                  style={styles.labelAddStyle(item.selected)}
                />
                <IcBack fill={item.selected ? color.white : color.blueTx} />
              </Pressable>
            );
          })}
          <View>
            <Pressable
              onPress={() => {
                setShowTakeNote(!showTakeNote);
                setShow(!show);
              }}
              style={styles.addNavStyle()}>
              <Text
                style={styles.labelAddStyle()}
                text={'Medical Journal (take notes)'}
              />
            </Pressable>
            {showTakeNote && (
              <View>
                <InputBox
                  value={noteVal}
                  onChangeText={value => {
                    setNoteVal(value);
                    setNoteValErr('');
                    setExtra(extra + 1);
                  }}
                  textAlignVertical="top"
                  multiline={true}
                  inputStyle={[styles.labelFieldText()]}
                  mainContainerStyle={styles.inputMainContainer()}
                  containerStyle={styles.showNote()}
                  numberOfLines={10}
                />
                {noteValErr ? (
                  <Text style={styles.errorText()}>{noteValErr}</Text>
                ) : null}
                <Button
                  onPress={() => {
                    validation();
                  }}
                  nameTx="appointment_reminder_screen.add"
                  buttonStyle={styles.addButtonStyle()}
                  buttonText={styles.textAddButton()}
                />
              </View>
            )}
          </View>
        </View>
      </Screen>
    </SafeAreaView>
  );
};
