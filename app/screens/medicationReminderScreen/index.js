import React, {useState, useRef, useEffect, useCallback} from 'react';
import {SafeAreaView, Pressable, View, Image} from 'react-native';
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
import {dose, medicineForm} from 'json';

export const MedicationReminderScreen = () => {
  const navigation = useNavigation();
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
  const [imageData, setImageData] = useState(
    'Upload or take picture from phone',
  );
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
  const [medicineFilteredValue, setMedicineFilteredValue] = useState();
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
        return item.name.toLowerCase().match(text);
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
      setImageData('Preview Image');
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
      setImageData('Preview Image');
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
      frequency_value: remindFreqDate,
      user_selected_time: `${remindTime.slice(0, 5)}:00`,
      pills_remaining: pills,
      medicineFilteredValue: medicineFilteredValue,
    });
  };

  const validation = () => {
    if (reminderName === '') {
      setReminderNameErr('Enter Reminder Name');
    }
    if (referredBy === '') {
      setReferredByErr('Enter doctor name');
    }
    if (referredBy === '') {
      setReferredByErr('Enter doctor name');
    }
    if (name === '') {
      setNameErr('Enter medicine name');
    }
    // if (imageData === null) {
    //   setImageDataErr('Upload / take image');
    // }
    if (medicineValue === '' || medicineValue === null) {
      setMedicineFormNameErr('Select medicine form');
    }
    if (medicineValue == 'Drop') {
      setPillsErr('');
    } else if (pills === '') {
      setPillsErr('Enter Pills');
    }
    if (medicineValue == 'Drop') {
      setMedicineStrengthErr('');
    } else if (medicineStrengthUnit === '') {
      setMedicineStrengthErr('Enter medicine Strength');
    }
    if (medicineValue == 'Drop') {
      setStrengthErr('');
    } else if (strength === '') {
      setStrengthErr('Enter Strength');
    }
    if (medicineStrengthUnit === '') {
    }
    if (doseValue === '' || doseValue === null) {
      setDoseValueErr('Select dose');
    }
    if (remindFrequencyValue === '' || remindFrequencyValue === null) {
      setRemindFrequencyValueErr('Select reminder frequency');
    }
    if (
      remindFreqDate === 'Select a Date' &&
      remindFrequencyValue !== 'EveryDay'
    ) {
      setRemindFrequencyValueErr('Select date');
    }
    if (remindTimeValue === '' || remindTimeValue === null) {
      setRemindTimeErr('Select reminder time');
    }
    if (remindTime === 'Select a Time') {
      setRemindTimeErr('Select time');
    }
    // if (pills === '') {
    //   setPillsErr('Enter Pills');
    // }

    // if (strength === '') {
    //   setStrengthErr('Enter Strength');
    // }
  };

  useFocusEffect(
    useCallback(() => {
      setReminderName('');
      setReferredBy('');
      setName('');
      setImageData('Upload or take picture from phone');
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
      setMedicineFilteredValue();
    }, []),
  );
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
        style={styles.screenContainer()}>
        <InputBox
          titleTx={'medication_reminder_screen.reminderName'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Reminder Name'}
          inputStyle={styles.inputStyle()}
          value={reminderName}
          mainContainerStyle={styles.inputMainContainer()}
          onChangeText={val => {
            setReminderName(val);
            // setReferredBy(val);
          }}
        />
        {reminderNameErr ? (
          <Text style={styles.errorText()}>{reminderNameErr}</Text>
        ) : null}
        <InputBox
          titleTx={'medication_reminder_screen.referred_by'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Add your Provider/Specialist'}
          inputStyle={styles.inputStyle()}
          value={referredBy}
          mainContainerStyle={styles.inputMainContainer()}
          onChangeText={val => {
            setReferredBy(val);
          }}
        />
        {referredByErr ? (
          <Text style={styles.errorText()}>{referredByErr}</Text>
        ) : null}
        <InputBox
          titleTx={'medication_reminder_screen.name_of_medicine'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Glycomet'}
          inputStyle={styles.inputStyle()}
          value={name}
          mainContainerStyle={styles.inputMainContainer()}
          onChangeText={val => {
            setName(val);
            onMedicineNameType(val);
            setNameErr('');
          }}
        />
        {nameErr ? <Text style={styles.errorText()}>{nameErr}</Text> : null}
        {medicineDropDown &&
          medicineFilteredValue.map((item, index) => {
            return (
              <Pressable
                style={styles.searchedValueList()}
                onPress={() => {
                  setName(item.name);
                  setNameErr('');
                  setMedicineDropDown(false);
                  setExtra(extra + 1);
                }}>
                <Text style={styles.medicineName()}>{item.name}</Text>
              </Pressable>
            );
          })}

        <Pressable
          style={styles.imageView()}
          onPress={() => {
            if (imageData == 'Upload or take picture from phone') {
              modalRef.current.open();
            } else {
              modalPreviewRef.current.open();
            }
          }}>
          <Text style={styles.textImage()} text={imageData} />
        </Pressable>
        {imageDataErr ? (
          <Text style={styles.errorText()}>{imageDataErr}</Text>
        ) : null}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.medicine_form"
        />
        <Dropdown
          defaultValue={{label: 'Select Forms', label: 'Select Forms'}}
          data={medicineForm}
          labelField="label"
          valueField="label"
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(70)}
          showsVerticalScrollIndicator={false}
          containerStyle={styles.dropdownContainer()}
          // value={medicineValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
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
          <Text style={styles.errorText()}>{medicineFormNameErr}</Text>
        ) : null}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.dose"
        />
        <Dropdown
          defaultValue={{value: 'Select Dose', label: 'Select Dose'}}
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
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            console.log('====================================');
            console.log('item medicine', item);
            console.log('====================================');
            setDoseValue(item.value);
            setDoseValueErr('');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
              </View>
            );
          }}
        />
        {doseValueErr ? (
          <Text style={styles.errorText()}>{doseValueErr}</Text>
        ) : null}
        {medicineValue != 'Drop' && (
          <View>
            <InputBox
              titleTx={'medication_reminder_screen.strength'}
              titleStyle={styles.labelFieldText()}
              placeholder={'Ex: 150'}
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
              <Text style={styles.errorText()}>{strengthErr}</Text>
            ) : null}
            <Dropdown
              defaultValue={{
                unit: 'Select Strength',
                unit: 'Select Strength',
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
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
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
          </View>
        )}
        {medicineStrengthErr ? (
          <Text style={styles.errorText()}>{medicineStrengthErr}</Text>
        ) : null}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.reminder_frequency"
        />
        <Dropdown
          defaultValue={{name: 'Select Frequency', name: 'Select Frequency'}}
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
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
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
          <Text style={styles.errorText()}>{remindFrequencyValueErr}</Text>
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
          defaultValue={{name: 'Select Time', name: 'Select Time'}}
          data={medicineReminderViewData?.ReminderTimeData}
          labelField="name"
          valueField="name"
          placeholder={'Select Time'}
          dropdownPosition={'bottom'}
          style={styles.dropdown(1)}
          placeholderStyle={styles.labelFieldText1()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(82)}
          showsVerticalScrollIndicator={false}
          containerStyle={styles.dropdownContainer()}
          value={remindTimeValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setRemindTimeValue(item.name);
            setRemindTime('Select a Time');
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
          <Text style={styles.errorText(1)}>{remindTimeErr}</Text>
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
                    alert('Please Select Future Time');
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
        {medicineValue != 'Drop' && (
          <>
            <InputBox
              titleTx={'medication_reminder_screen.pill_remaining'}
              titleStyle={styles.labelFieldText()}
              placeholder={'0'}
              keyboardType={'number-pad'}
              inputStyle={styles.inputStyle()}
              value={pills}
              mainContainerStyle={styles.inputMainContainer()}
              onChangeText={val => {
                setPills(val);
                setPillsErr('');
                setExtra(extra + 1);
              }}
            />
          </>
        )}
        {pillsErr ? <Text style={styles.errorText(1)}>{pillsErr}</Text> : null}
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
              name="Change Image"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
          </View>
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};
