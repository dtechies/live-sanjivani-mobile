import React, {useState, useEffect, useRef} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {Text, Screen, Button, Loader, Toast} from 'components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getReminderOption, getAllCategoryAndSubCategory} from 'redux-actions';

import {size, color, IcPlus, IcHeart} from 'theme';

import * as styles from './styles';
export const AddScreen = props => {
  const navigation = useNavigation();
  const toastRef = useRef();
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(null);
  const [extra, setExtra] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reminderOption, setReminderOption] = useState('');
  const [categoryWithSubCategoryData, setCategoryWithSubCategoryData] =
    useState([]);

  const {token} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
  }));
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getReminderOptionData = async () => {
    setLoading(true);
    const getReminderOptionHeader = {
      token: token,
    };
    // console.log('getReminderOption header ==>>', getReminderOptionHeader);
    const getReminderOptionResponse = await dispatch(
      getReminderOption(getReminderOptionHeader),
    );
    const res = getReminderOptionResponse.payload;
    // console.log('getReminderOption response ==>>', res);

    if (res.status) {
      // console.log('getReminderOption data ==>>', res.data);
      setReminderOption(res.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const getAllCategoryAndSubCategoryData = async () => {
    setLoading(true);
    const getAllCategoryAndSubCategoryHeader = {
      token: token,
    };
    // console.log('getAllCategoryAndSubCategory header ==>>', getAllCategoryAndSubCategoryHeader);
    const getAllCategoryAndSubCategoryResponse = await dispatch(
      getAllCategoryAndSubCategory(getAllCategoryAndSubCategoryHeader),
    );
    const res = getAllCategoryAndSubCategoryResponse.payload;
    // console.log('getAllCategoryAndSubCategory response ==>>', res);
    if (res.status) {
      // console.log('getAllCategoryAndSubCategory data ==>>', res.data);
      toastMessage(res.message);
      setCategoryWithSubCategoryData(res.data.categoryData);
      setLoading(false);
      // setReminderOption(res.data);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  useEffect(() => {
    getReminderOptionData();
    getAllCategoryAndSubCategoryData();
  }, []);
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
      <Screen
        keyboardShouldPersistTaps={'handled'}
        bounces={false}
        style={styles.container()}>
        <Pressable>
          <Text style={styles.textLanding()} tx={'add_screen.add'} />
        </Pressable>
        {reminderOption.is_medicine_reminder === 1 && (
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

        <Pressable
          style={styles.takeNoteView()}
          onPress={() => navigation.navigate('medicalJournalScreen')}>
          <Text
            style={styles.textTakeNot()}
            tx={'add_screen.medical_journal'}
          />
        </Pressable>
      </Screen>
    </SafeAreaView>
  );
};
