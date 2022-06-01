import React, {useState, useEffect, useRef} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {
  Text,
  Screen,
  InputBox,
  Button,
  Header,
  Toast,
  Loader,
} from 'components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getAllCategoryAndSubCategory} from 'redux-actions';
import {size, color, IcPlus, IcBack} from 'theme';
import {addServiceData, AddNavData} from 'json';
import * as styles from './styles';

export const AddScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toastRef = useRef();
  const [activeIndex, setActiveIndex] = useState(null);
  const [extra, setExtra] = useState(0);
  const [noteVal, setNoteVal] = useState(null);
  const [noteValErr, setNoteValErr] = useState('');
  const [showTakeNote, setShowTakeNote] = useState(false);
  const [show, setShow] = useState(true);
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState([]);

  const params = props.route.params && props.route.params.showType;
  const [data, setData] = useState(addServiceData);
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const clearData = () => {
    data.map((val, i) => {
      data[i].selected = false;
    });
    addServiceData.map((val, i) => {
      addServiceData[i].selected = false;
    });
    setExtra(extra + 1);
  };
  const getAllCategoryAndSubCategoryData = async () => {
    setLoading(true);
    const allCatResponse = await dispatch(getAllCategoryAndSubCategory());
    const res = allCatResponse;
    console.log('allCatResponse_NEW ==>', res);
    if (res.status) {
      setLoading(false);
      setShowSub(true);
      setAllCategory(res.data.categoryData);
      setExtra(extra + 1);
    } else {
      setLoading(false);
      setShowSub(false);
      toastMessage(res.message);
    }
  };

  useEffect(() => {
    clearData();
    getAllCategoryAndSubCategoryData();
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
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
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
                      allCategory.map(val => {
                        if (val.name == item.name) {
                          navigation.navigate('addDetailsScreen', {
                            title: item.name,
                            sub: val.subcategories,
                          });
                        }
                      });
                      // clearData();
                      // console.log('selected', data[index].selected);
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
                key={index + 'addMedication'}
                disabled={!showSub}>
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
