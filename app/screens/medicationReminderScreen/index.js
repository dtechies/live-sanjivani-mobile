import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import {SafeAreaView, Pressable, View, Image, Keyboard} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import 'react-native-gesture-handler';

import {
  Loader,
  Text,
  Button,
  Screen,
  InputBox,
  Header,
  Toast,
} from 'components';
import {size, color, IcCrossArrow} from 'theme';
import {useDispatch} from 'react-redux';
import {getMedicineReminderView} from 'redux-actions';
import * as styles from './styles';
import {LocalizationContext} from '../../App';
import {dose, medicineForm} from 'json';

export const MedicationReminderScreen = () => {
  const navigation = useNavigation();
  const {t} = useContext(LocalizationContext);
  const dispatch = useDispatch();
  const toastRef = useRef();
  const modalRef = useRef();
  const modalPreviewRef = useRef();
  const [loading, setLoading] = useState(false);
  const [medicineReminderViewData, setMedicineReminderViewData] = useState();
  const [medicineValue, setMedicineValue] = useState('');
  const [reminderName, setReminderName] = useState('');
  const [reminderNameErr, setReminderNameErr] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [doseValue, setDoseValue] = useState(null);
  const [extra, setExtra] = useState(0);
  const [remindFrequencyValue, setRemindFrequencyValue] = useState(null);
  const [remindFreqDate, setRemindFreqDate] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [remindTimeValue, setRemindTimeValue] = useState(null);
  const [remindTime, setRemindTime] = useState('');
  const [showTime, setShowTime] = useState(false);
  const [imageData, setImageData] = useState();
  const [imageUpload, setImageUpload] = useState('');
  const [imageDataErr, setImageDataErr] = useState('');
  const [referredByErr, setReferredByErr] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [medicineFormNameErr, setMedicineFormNameErr] = useState(null);
  const [medicineStrengthUnit, setMedicineStrengthUnit] = useState('');

  const [strength, setStrength] = useState('');
  const [strengthErr, setStrengthErr] = useState('');
  const [doseValueErr, setDoseValueErr] = useState(null);
  const [remindFrequencyValueErr, setRemindFrequencyValueErr] = useState(null);
  const [remindTimeErr, setRemindTimeErr] = useState('');
  const [medicineStrengthErr, setMedicineStrengthErr] = useState('');
  const [pills, setPills] = useState('');
  const [pillsErr, setPillsErr] = useState('');
  const [medicineDropDown, setMedicineDropDown] = useState(false);
  const [medicineFilteredValue, setMedicineFilteredValue] = useState([]);
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  // const closeModal = () => {
  //   modalRef.current.close();
  // };
  // const onCloseCallback = () => {
  //   modalRef.current.close();
  // };
  const onMedicineNameType = val => {
    if (val.length == 0) {
      setMedicineFilteredValue([]);
    }
    let text = val.toLowerCase() || val.toUpperCase();
    if (val.length > 2) {
      // setIsFocus(true);
      setMedicineDropDown(true);
      let filteredName = medicineReminderViewData.MedicineData.filter(item => {
        return item.name.toLowerCase().includes(text);
      });
      setMedicineFilteredValue(filteredName);
    }
  };
  const uploadFromGallery = () => {
    ImagePicker.openPicker({
      width: size.moderateScale(300),
      height: size.moderateScale(400),
      cropping: true,
      includeBase64: true,
    }).then(image => {
      var imgPathIndex = image.path.lastIndexOf('/');
      var imgPathSubstr = image.path.substring(imgPathIndex + 1);
      image.imageName = imgPathSubstr;
      modalRef.current.close();
      // setImageData(image.path.split('/').pop());
      setImageData(t('medication_reminder_screen.previewImg'));
      setImageUpload(image);
      setImageDataErr('');
      setExtra(extra + 1);
      // console.log('uploadFromGallery Image ==>', image.path);
    });
  };
  const takeFromCamera = () => {
    ImagePicker.openCamera({
      width: size.moderateScale(300),
      height: size.moderateScale(400),
      cropping: true,
      mediaType: 'photo',
      includeBase64: true,
    }).then(image => {
      var imgPathIndex = image.path.lastIndexOf('/');
      var imgPathSubstr = image.path.substring(imgPathIndex + 1);
      image.imageName = imgPathSubstr;
      modalRef.current.close();
      // setImageData(image.path.split('/').pop());
      setImageData(t('medication_reminder_screen.previewImg'));
      setImageUpload(image);
      setImageDataErr('');
    });
  };

  const getRemindFreqCurrentDate = givenDate => {
    let day =
      givenDate.getDate() > 9 ? givenDate.getDate() : `0${givenDate.getDate()}`;
    let month =
      givenDate.getMonth() + 1 > 9
        ? givenDate.getMonth() + 1
        : `0${givenDate.getMonth() + 1}`;
    let year = givenDate.getFullYear();
    let newDate = year + '-' + month + '-' + day;
    setRemindFreqDate(newDate);
    setSelectedDate(givenDate);
    setRemindFrequencyValueErr('');
    setShowDate(false);
  };
  const getRemindTime = givenTime => {
    let newTime = givenTime.toTimeString().slice(0, 5);
    setRemindTime(newTime);
    setRemindTimeErr('');
    setShowTime(false);
  };
  const onGetMedicineReminderView = async () => {
    setLoading(true);

    const getOtpResponse = await dispatch(getMedicineReminderView());
    let res = {status: false, message: 'Connection Error...!'};
    if (getOtpResponse) {
      res = getOtpResponse.payload;
    }

    // console.log('response data ==>', res.data);
    if (res.status) {
      // console.log('response data ==>', res.data);
      setMedicineReminderViewData(res.data);
      setLoading(false);
      toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const onNext = async () => {
    let givenDate = new Date();
    let day =
      givenDate.getDate() > 9 ? givenDate.getDate() : `0${givenDate.getDate()}`;
    let month =
      givenDate.getMonth() + 1 > 9
        ? givenDate.getMonth() + 1
        : `0${givenDate.getMonth() + 1}`;
    let year = givenDate.getFullYear();
    let newDate = year + '-' + month + '-' + day;
    navigation.navigate('checkMedicationReminderScreen', {
      reminder_name: reminderName,
      referredBy: referredBy,
      medicine_name: name,
      imageUpload: imageUpload,
      medicine_form: medicineValue,
      dose: doseValue,
      medicine_strength: strength,
      medicine_strength_unit: medicineStrengthUnit,
      reminder_frequency: remindFrequencyValue,
      reminder_time: remindTimeValue,
      frequency_value:
        remindFreqDate == ''
          ? newDate
          : remindFreqDate == 'Select a Date'
          ? newDate
          : remindFreqDate,
      user_selected_time: `${remindTime.slice(0, 5)}:00`,
      pills_remaining: pills,
      medicineFilteredValue:
        medicineFilteredValue == [] ? {} : medicineFilteredValue,
    });
  };

  const validation = () => {
    if (reminderName === '') {
      setReminderNameErr('medication_reminder_screen.reminderNameErr');
    }
    if (referredBy === '') {
      setReferredByErr('medication_reminder_screen.doctorNameErr');
    }
    if (name === '') {
      setNameErr('medication_reminder_screen.medicineName');
    }
    if (imageData != t('medication_reminder_screen.uploadImage')) {
      setImageDataErr('medication_reminder_screen.imageErr');
    }
    if (medicineValue === '' || medicineValue === null) {
      setMedicineFormNameErr('medication_reminder_screen.medicineFormErr');
    }
    if (medicineValue == 'Drop') {
      setPillsErr('');
    } else if (pills === '') {
      setPillsErr('medication_reminder_screen.pillsErr');
    }
    if (medicineValue == 'Drop') {
      setMedicineStrengthErr('');
    } else if (medicineStrengthUnit === '') {
      setMedicineStrengthErr('medication_reminder_screen.medicineStrengthErr');
    }
    if (medicineValue == 'Drop') {
      setStrengthErr('');
    } else if (strength === '') {
      setStrengthErr('medication_reminder_screen.strengthErr');
    }
    if (doseValue === '' || doseValue === null) {
      setDoseValueErr('medication_reminder_screen.doseErr');
    }
    if (remindFrequencyValue === '' || remindFrequencyValue === null) {
      setRemindFrequencyValueErr(
        'medication_reminder_screen.reminderFrequencyErr',
      );
    }
    if (
      remindFreqDate === 'Select a Date' &&
      remindFrequencyValue !== 'EveryDay'
    ) {
      setRemindFrequencyValueErr('medication_reminder_screen.dateErr');
    }
    if (remindTimeValue === '' || remindTimeValue === null) {
      setRemindTimeErr('medication_reminder_screen.reminderTimeErr');
    }
    if (remindTime === t('medication_reminder_screen.timeErr')) {
      setRemindTimeErr('medication_reminder_screen.timeErr');
    }
  };
  useFocusEffect(
    useCallback(() => {
      onGetMedicineReminderView();
      setReminderName('');
      setReferredBy('');
      setName('');
      setImageData(t('medication_reminder_screen.uploadImage'));
      setImageUpload('');
      setMedicineValue('');
      setDoseValue(null);
      setStrength('');
      setMedicineStrengthUnit('');
      setRemindFrequencyValue(null);
      setRemindTimeValue(null);
      setRemindFreqDate('');
      setRemindTime('');
      setPills('');
    }, []),
  );
  const closeKeyboard = () => {
    Keyboard.dismiss();
  };
  useEffect(() => {
    onGetMedicineReminderView();
  }, []);

  return (
    <SafeAreaView style={styles.container()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isClose={false}
        isLogo={false}
        isLongArrowLeft={false}
        isLeftArrow={true}
        isLogoCenter={false}
        isHeading={true}
        isBlue={false}
        isCamera={false}
        title={'medication_reminder_screen.title'}
      />
      <Screen
        showsVerticalScrollIndicator={false}
        bounces={false}
        enableResetScrollToCoords={false}
        style={styles.screenContainer()}>
        <InputBox
          titleTx={'medication_reminder_screen.reminderName'}
          titleStyle={styles.labelFieldText()}
          placeHolderVal={'medication_reminder_screen.reminderExample'}
          inputStyle={styles.inputStyle()}
          value={reminderName}
          mainContainerStyle={styles.inputMainContainer()}
          onChangeText={val => {
            setReminderName(val);
            setReminderNameErr('');
            // setReferredBy(val);
          }}
        />
        {reminderNameErr ? (
          <Text style={styles.errorText()} tx={reminderNameErr} />
        ) : null}
        <InputBox
          titleTx={'medication_reminder_screen.referred_by'}
          titleStyle={styles.labelFieldText()}
          placeHolderVal={'medication_reminder_screen.doctorNmExample'}
          inputStyle={styles.inputStyle()}
          value={referredBy}
          mainContainerStyle={styles.inputMainContainer()}
          onChangeText={val => {
            setReferredBy(val);
            setReferredByErr('');
          }}
        />
        {referredByErr ? (
          <Text style={styles.errorText()} tx={referredByErr} />
        ) : null}
        <InputBox
          titleTx={'medication_reminder_screen.name_of_medicine'}
          titleStyle={styles.labelFieldText()}
          placeHolderVal={'medication_reminder_screen.medicineNmExample'}
          inputStyle={styles.inputStyle()}
          value={name}
          mainContainerStyle={styles.inputMainContainer()}
          onChangeText={val => {
            setName(val);
            onMedicineNameType(val);
            setNameErr('');
          }}
        />
        {nameErr ? <Text style={styles.errorText()} tx={nameErr} /> : null}
        {medicineDropDown &&
          medicineFilteredValue.map((item, index) => {
            return (
              <Pressable
                style={styles.searchedValueList()}
                onPress={() => {
                  setName(item.name);
                  setNameErr('');
                  setMedicineDropDown(false);
                  setMedicineFilteredValue(item);
                  setExtra(extra + 1);
                }}>
                <Text style={styles.medicineName()}>{item.name}</Text>
              </Pressable>
            );
          })}

        <Pressable
          style={styles.imageView()}
          onPress={() => {
            if (imageData == t('medication_reminder_screen.uploadImage')) {
              modalRef.current.open();
            } else {
              modalPreviewRef.current.open();
            }
          }}>
          <Text style={styles.textImage()} text={imageData} />
        </Pressable>
        {imageDataErr ? (
          <Text style={styles.errorText()} tx={imageDataErr} />
        ) : null}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.medicine_form"
        />
        <Dropdown
          defaultValue={{
            label: t('medication_reminder_screen.selectForm'),
          }}
          data={medicineForm}
          labelField="label"
          // isTxEnabled={true}
          valueField="value"
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(90)}
          showsVerticalScrollIndicator={true}
          containerStyle={styles.dropdownContainer()}
          // value={medicineValue}
          onFocus={() => {
            closeKeyboard();
            setIsFocus(true);
          }}
          onBlur={() => {
            closeKeyboard();
            setIsFocus(false);
          }}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setMedicineValue(item.label);
            setMedicineFormNameErr('');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.label} style={styles.InsideLabelFieldText()} />
              </View>
            );
          }}
        />
        {medicineFormNameErr ? (
          <Text style={styles.errorText()} tx={medicineFormNameErr} />
        ) : null}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.dose"
        />
        <Dropdown
          defaultValue={{
            label: t('medication_reminder_screen.doseErr'),
          }}
          data={dose}
          // data={medicineReminderViewData?.Dose}
          labelField="label"
          valueField="value"
          // placeholder={'Select Dose11'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          // placeholderStyle={styles.labelFieldText1()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(82)}
          showsVerticalScrollIndicator={false}
          containerStyle={styles.dropdownContainer()}
          // value={doseValue}
          onFocus={() => {
            closeKeyboard();
            setIsFocus(true);
          }}
          onBlur={() => {
            closeKeyboard();
            setIsFocus(false);
          }}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setDoseValue(item.value);
            setDoseValueErr('');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.label} style={styles.InsideLabelFieldText()} />
              </View>
            );
          }}
        />
        {doseValueErr ? (
          <Text style={styles.errorText()} tx={doseValueErr} />
        ) : null}
        {medicineValue != 'Drop' && (
          <View>
            <InputBox
              titleTx={'medication_reminder_screen.strength'}
              titleStyle={styles.labelFieldText()}
              placeHolderVal={'medication_reminder_screen.strengthExample'}
              maxLength={3}
              keyboardType={'decimal-pad'}
              placeholderTextColor={color.grayTxt}
              inputStyle={styles.inputStyle()}
              value={strength}
              mainContainerStyle={styles.inputMainContainer()}
              onChangeText={val => {
                setStrength(val);
                setNameErr('');
              }}
            />
            {strengthErr ? (
              <Text style={styles.errorText()} tx={strengthErr} />
            ) : null}
            <Dropdown
              defaultValue={{
                unit: t('medication_reminder_screen.strength'),
              }}
              data={medicineReminderViewData?.MedicineStrengthData}
              labelField="unit"
              valueField="unit"
              // placeholder={'Select Strength'}
              dropdownPosition={'bottom'}
              style={styles.dropdown()}
              // placeholderStyle={styles.labelFieldText1()}
              selectedTextStyle={styles.selectedOptionTextStyle()}
              maxHeight={size.moderateScale(82)}
              showsVerticalScrollIndicator={false}
              containerStyle={styles.dropdownContainer()}
              // value={unitValue}
              onFocus={() => {
                closeKeyboard();
                setIsFocus(true);
              }}
              onBlur={() => {
                closeKeyboard();
                setIsFocus(false);
              }}
              flatListProps={{
                bounces: false,
                ItemSeparatorComponent: () => {
                  return <View style={styles.separator()} />;
                },
              }}
              onChange={item => {
                setMedicineStrengthUnit(item.unit);
                setMedicineStrengthErr('');
                setIsFocus(false);
              }}
              renderItem={item => {
                return (
                  <View style={styles.dropDownMain()}>
                    <Text
                      text={item.unit}
                      style={styles.InsideLabelFieldText()}
                    />
                  </View>
                );
              }}
            />
            {medicineStrengthErr ? (
              <Text style={styles.errorText()} tx={medicineStrengthErr} />
            ) : null}
          </View>
        )}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.reminder_frequency"
        />
        <Dropdown
          defaultValue={{
            name: t('medication_reminder_screen.selectFrequency'),
          }}
          data={medicineReminderViewData?.ReminderFrequencyData}
          labelField="name"
          valueField="name"
          // placeholder={'Select Frequency'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          // placeholderStyle={styles.labelFieldText1()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(82)}
          showsVerticalScrollIndicator={false}
          containerStyle={styles.dropdownContainer()}
          // value={remindFrequencyValue}
          onFocus={() => {
            closeKeyboard();
            setIsFocus(true);
          }}
          onBlur={() => {
            closeKeyboard();
            setIsFocus(false);
          }}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setRemindFrequencyValue(item.name);
            setRemindFreqDate('Select a Date');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.name} style={styles.InsideLabelFieldText()} />
              </View>
            );
          }}
        />
        {remindFrequencyValue !== 'EveryDay' && remindFrequencyValue !== null && (
          <Pressable
            onPress={() => {
              setShowDate(!showDate);
            }}
            style={styles.showtimeMain(11)}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )}
        {remindFrequencyValueErr ? (
          <Text style={styles.errorText()} tx={remindFrequencyValueErr} />
        ) : null}
        {showDate && (
          <>
            <DateTimePickerModal
              date={selectedDate}
              isVisible={showDate}
              mode="date"
              minimumDate={new Date()}
              onConfirm={val => getRemindFreqCurrentDate(val)}
              onCancel={() => {
                setShowDate(false);
                setExtra(extra + 1);
              }}
            />
          </>
        )}
        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.reminder_time"
        />
        <Dropdown
          defaultValue={{
            name: t('medication_reminder_screen.timeErr'),
          }}
          data={medicineReminderViewData?.ReminderTimeData}
          labelField="name"
          valueField="name"
          // placeholder={'Select Time'}
          dropdownPosition={'bottom'}
          style={styles.dropdown(1)}
          placeholderStyle={styles.labelFieldText1()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(90)}
          showsVerticalScrollIndicator={true}
          containerStyle={styles.dropdownContainer()}
          value={remindTimeValue}
          onFocus={() => {
            closeKeyboard();
            setIsFocus(true);
          }}
          onBlur={() => {
            closeKeyboard();
            setIsFocus(false);
          }}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setRemindTimeValue(item.name);
            setRemindTime(t('medication_reminder_screen.timeErr'));
            setRemindTimeErr('');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.name} style={styles.InsideLabelFieldText()} />
              </View>
            );
          }}
        />
        {remindTimeValue !== null && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}
            style={styles.showtimeMain()}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeErr ? (
          <Text style={styles.errorText(1)} tx={remindTimeErr} />
        ) : null}
        {showTime && (
          <>
            <DateTimePickerModal
              isVisible={showTime}
              mode="time"
              date={selectedDate}
              minimumDate={new Date()}
              locale="en_GB"
              onConfirm={val => {
                if (
                  new Date(val).toDateString() === new Date().toDateString()
                ) {
                  if (new Date(val).getTime() > new Date().getTime()) {
                    getRemindTime(val);
                  } else {
                    alert(t('medication_reminder_screen.futureTimeErr'));
                  }
                } else {
                  getRemindTime(val);
                }
              }}
              onCancel={() => {
                setShowTime(false);
                setExtra(extra + 1);
              }}
            />
          </>
        )}
        {medicineValue === 'Tablet' || medicineValue === 'Pill' ? (
          <>
            <InputBox
              titleTx={'medication_reminder_screen.pill_remaining'}
              titleStyle={styles.labelFieldText()}
              placeHolderVal={'medication_reminder_screen.pillNumber'}
              keyboardType={'number-pad'}
              maxLength={3}
              inputStyle={styles.inputStyle()}
              value={pills}
              mainContainerStyle={styles.inputMainContainer()}
              onChangeText={val => {
                setPills(val);
                setPillsErr('');
                setExtra(extra + 1);
              }}
            />
            {pillsErr ? (
              <Text style={styles.errorText(1)} tx={pillsErr} />
            ) : null}
          </>
        ) : null}
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx="medication_reminder_screen.next"
          onPress={() => {
            referredBy &&
            name &&
            medicineValue &&
            doseValue &&
            remindFrequencyValue &&
            remindFreqDate &&
            remindTimeValue &&
            imageData &&
            remindTime
              ? onNext()
              : validation();
          }}
        />
      </Screen>
      <Portal>
        <Modalize
          ref={modalRef}
          adjustToContentHeight={true}
          disableScrollIfPossible={false}
          // onOverlayPress={closeModal}
          // onClosed={onCloseCallback}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
            contentContainerStyle: styles.modalContentContainerStyle(),
          }}
          modalStyle={styles.modalStyle()}
          handleStyle={styles.dragStyle()}>
          <View>
            <Button
              onPress={() => takeFromCamera()}
              nameTx="medication_reminder_screen.take_picture"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
            <Button
              onPress={() => uploadFromGallery()}
              nameTx="medication_reminder_screen.upload_picture"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
          </View>
        </Modalize>
        <Modalize
          ref={modalPreviewRef}
          adjustToContentHeight={true}
          disableScrollIfPossible={false}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
            contentContainerStyle: styles.modalContentContainerStyle(),
          }}
          modalStyle={styles.modalStyle()}
          handleStyle={styles.dragStyle()}>
          <View>
            <Pressable
              onPress={() => {
                modalPreviewRef.current.close();
              }}
              style={styles.crossIconView()}>
              <IcCrossArrow
                width={size.moderateScale(18)}
                height={size.moderateScale(18)}
                fill={color.black}
              />
            </Pressable>
            <Image
              resizeMode="contain"
              source={{uri: imageUpload && imageUpload?.path}}
              style={styles.imageModelView()}
            />
            <Button
              onPress={() => {
                modalRef.current.open();
                modalPreviewRef.current.close();
              }}
              nameTx="medication_reminder_screen.changeImg"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
          </View>
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};
