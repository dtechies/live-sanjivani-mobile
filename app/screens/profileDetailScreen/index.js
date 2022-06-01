import React, {useState, useRef, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  View,
  Pressable,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {Dropdown} from 'react-native-element-dropdown';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {useDispatch, useSelector} from 'react-redux';

import {
  Loader,
  Text,
  Button,
  TitleBox,
  Screen,
  InputBox,
  Header,
} from 'components';
import {size, color, IcSearch, IcEdit, images} from 'theme';
import * as styles from './styles';
import {
  medicineForm,
  dose,
  measurementUnit,
  reminderFrequency,
  reminderTime,
  genderVal,
  languageVal,
} from 'json';

export const ProfileDetailScreen = () => {
  const {userDetails = {}, age = ''} = useSelector(state => ({
    userDetails: state.userDataReducer.userDataResponse.userData,
    age: state.userDataReducer.userDataResponse.age,
  }));
  const [firstNm, setFirstNm] = useState(userDetails.first_name);
  const [firstNmErr, setFirstNmErr] = useState('');
  const [lastNm, setLastNm] = useState(userDetails.last_name);
  const [lastNmErr, setLastNmErr] = useState('');
  const [dob, setDob] = useState(userDetails.dob);
  const [dobErr, setDobErr] = useState('');
  const [email, setEmail] = useState(userDetails.email);
  const [emailErr, setEmailErr] = useState('');
  const [phone, setPhone] = useState(userDetails.mob_no);
  const [phoneErr, setPhoneErr] = useState('');
  const [gender, setGender] = useState(userDetails.gender);
  const [genderDefault, setGenderDefault] = useState({
    label: userDetails.gender,
    value: userDetails.gender,
  });
  const [genderErr, setGenderErr] = useState('');
  const [language, setLanguage] = useState(userDetails.language);
  const [languageDefault, setLanguageDefault] = useState({
    label: userDetails.language,
    value: userDetails.language,
  });
  const [languageErr, setLanguageErr] = useState('');
  const [extra, setExtra] = useState(0);
  const [isEditable, setIsEditable] = useState(false);
  const [imageData, setImageData] = useState('');
  const [imageDataErr, setImageDataErr] = useState('');
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    console.log('userDetails ==> ', userDetails);
  }, []);

  const modalRef = useRef();

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
      setImageData(image);
      setImageDataErr('');
      setExtra(extra + 1);
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
      setImageData(image);
      setImageDataErr('');
    });
  };
  const getCurrentDate = givenDate => {
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = day + '-' + month + '-' + year;
    setDob(newDate);
    setDobErr('');
    setShowDate(false);
  };
  const validateFirstNm = firstNm => {
    if (firstNm === '') {
      setFirstNmErr('Please Enter First Name');
    } else {
      setFirstNmErr('');
    }
  };
  const validateLastNm = lastNm => {
    if (lastNm === '') {
      setLastNmErr('Please Enter Last Name');
    } else {
      setLastNmErr('');
    }
  };
  const validatePhone = phone => {
    if (phone === '') {
      setPhoneErr('Please Enter Phone number');
    } else if (phone.length < 10) {
      setPhoneErr('Invalid Phone number');
    } else {
      setPhoneErr('');
    }
  };
  const validateEmail = email => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '') {
      setEmailErr('Please Enter Email Address');
    } else if (reg.test(email) === false) {
      setEmailErr('Invalid email');
    } else {
      setEmailErr('');
    }
  };
  const validation = () => {
    validateFirstNm(firstNm);
    validateLastNm(lastNm);
    if (lastNm === '') {
      setLastNmErr('Please Enter Last Name');
    }
    if (gender === '') {
      setGenderErr('Please select Gender');
    }
    if (dob === '') {
      setDobErr('Please select Date');
    }
    validateEmail(email);
    validatePhone(phone);
    // if (email === '') {
    //   setEmailErr('Please Enter Email Address');
    // }
    // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (reg.test(email) === false) {
    //   setEmailErr('Enter valid email');
    // }

    if (language === '') {
      setLanguageErr('Please select Language');
    }
    if (imageData === null) {
      setImageDataErr('Please Upload / take image...');
    }
  };
  const editProfileDetails = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        iconPress={() => {
          modalRef.current.open();
        }}
        source={{uri: imageData && imageData?.path}}
        isColor={true}
        isClose={false}
        isLogo={false}
        isLongArrowLeft={false}
        isLeftArrow={true}
        isLogoCenter={true}
        isHeading={true}
        isBlue={false}
        isCamera={true}
        title={'ProfileDetailScreen.title'}
        name={firstNm + ' ' + lastNm}
        secName={email}
      />
      <Screen withScroll style={styles.screenContainer()}>
        <View style={styles.settingMain()}>
          <Text
            style={styles.editText()}
            tx="ProfileDetailScreen.Account Settings"
          />
          {!isEditable && (
            <Pressable
              style={styles.editIcon()}
              onPress={() => {
                setIsEditable(true);
                setExtra(extra + 1);
              }}>
              <Text style={styles.editText()} tx="ProfileDetailScreen.Edit" />
              <IcEdit height={10} width={10} fill={color.blue} />
            </Pressable>
          )}
          {isEditable && (
            <Pressable
              style={styles.editIcon()}
              onPress={() => {
                setIsEditable(false);
                setExtra(extra + 1);
              }}>
              <Text style={styles.editText()} tx="ProfileDetailScreen.Back" />
            </Pressable>
          )}
        </View>
        <View style={styles.editMain()}>
          <InputBox
            mainContainerStyle={styles.inputMain()}
            inputStyle={styles.button(isEditable)}
            value={firstNm}
            onChangeText={text => {
              setFirstNm(text);
              validateFirstNm(text);
              setExtra(extra + 1);
            }}
            editable={isEditable}
          />
          {firstNmErr ? (
            <Text style={styles.errorText()}>{firstNmErr}</Text>
          ) : null}
          <InputBox
            mainContainerStyle={styles.inputMain()}
            inputStyle={styles.button(isEditable)}
            value={lastNm}
            onChangeText={text => {
              setLastNm(text);
              validateLastNm(text);
              setExtra(extra + 1);
            }}
            editable={isEditable}
          />
          {lastNmErr ? (
            <Text style={styles.errorText()}>{lastNmErr}</Text>
          ) : null}
          {!isEditable && (
            <InputBox
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.button(isEditable)}
              value={genderDefault.value}
              onChangeText={text => {
                setGender(text);
              }}
              editable={isEditable}
            />
          )}
          {isEditable && (
            <Dropdown
              defaultValue={genderDefault}
              // ref={genderRef}
              data={genderVal}
              labelField="label"
              valueField="value"
              // placeholder={'Gender'}
              dropdownPosition={'bottom'}
              style={styles.dropdown()}
              placeholderStyle={styles.labelFieldText()}
              selectedTextStyle={styles.selectedOptionTextStyle()}
              maxHeight={size.moderateScale(55)}
              containerStyle={styles.dropdownContainer()}
              // value={dropGender}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              flatListProps={{
                bounces: false,
              }}
              onChange={item => {
                setGender(item.value);
                setIsFocus(false);
              }}
              renderItem={item => {
                return (
                  <View>
                    <Text
                      text={item.value}
                      style={styles.InsideLabelFieldText()}
                    />
                    <View style={styles.separator()} />
                  </View>
                );
              }}
            />
          )}
          {!isEditable && (
            <InputBox
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.button(isEditable)}
              value={dob}
              onChangeText={text => {
                setDob(text);
              }}
              editable={isEditable}
            />
          )}
          {genderErr ? (
            <Text style={styles.errorText()}>{genderErr}</Text>
          ) : null}
          {isEditable && (
            <Pressable
              style={styles.dateMainView()}
              onPress={() => {
                setShowDate(true);
                setExtra(extra + 1);
              }}>
              <Text style={styles.textDate(isEditable)}>{dob}</Text>
            </Pressable>
          )}
          {dobErr ? <Text style={styles.errorText()}>{dobErr}</Text> : null}
          {showDate && (
            <DateTimePickerModal
              isVisible={showDate}
              mode="date"
              onConfirm={val => getCurrentDate(val)}
              onCancel={() => {
                setShowDate(false);
                setExtra(extra + 1);
              }}
            />
          )}
          <InputBox
            mainContainerStyle={styles.inputMain()}
            inputStyle={styles.button(isEditable)}
            value={email}
            onChangeText={text => {
              setEmail(text);
              validateEmail(text);
              setExtra(extra + 1);
            }}
            editable={isEditable}
            keyboardType={'email-address'}
          />
          {emailErr ? <Text style={styles.errorText()}>{emailErr}</Text> : null}
          <InputBox
            mainContainerStyle={styles.inputMain()}
            inputStyle={styles.button(isEditable)}
            value={phone}
            onChangeText={text => {
              setPhone(text);
              validatePhone(text);
              setExtra(extra + 1);
            }}
            maxLength={10}
            keyboardType="numeric"
            editable={isEditable}
          />
          {phoneErr ? <Text style={styles.errorText()}>{phoneErr}</Text> : null}
          {!isEditable && (
            <InputBox
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.button(isEditable)}
              value={languageDefault.value}
              onChangeText={text => {
                setLanguage(text);
              }}
              editable={isEditable}
            />
          )}

          {isEditable && (
            <Dropdown
              defaultValue={languageDefault}
              data={languageVal}
              labelField="label"
              valueField="value"
              // placeholder={'Language'}
              dropdownPosition={'bottom'}
              style={styles.dropdown()}
              // placeholderStyle={styles.labelFieldText()}
              selectedTextStyle={styles.selectedOptionTextStyle()}
              maxHeight={size.moderateScale(56)}
              containerStyle={styles.dropdownContainer()}
              // value={language}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              flatListProps={{
                bounces: false,
              }}
              onChange={item => {
                setLanguage(item.value);
                setIsFocus(false);
              }}
              renderItem={item => {
                return (
                  <View>
                    <Text
                      text={item.value}
                      style={styles.InsideLabelFieldText()}
                    />
                    <View style={styles.separator()} />
                  </View>
                );
              }}
            />
          )}
          {languageErr ? (
            <Text style={styles.errorText()}>{languageErr}</Text>
          ) : null}
          {isEditable && (
            <Button
              buttonStyle={styles.buttonSave()}
              buttonText={styles.buttonTxt()}
              nameTx={'ProfileDetailScreen.Save'}
              onPress={() => {
                firstNm &&
                lastNm &&
                gender &&
                dob &&
                email &&
                phone.length == 10 &&
                language
                  ? editProfileDetails()
                  : validation();
                // navigation.goBack();
              }}
            />
          )}
        </View>
      </Screen>
      <Portal>
        <Modalize
          ref={modalRef}
          adjustToContentHeight={true}
          handlePosition={'inside'}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
            contentContainerStyle: styles.modalContentContainerStyle(),
            keyboardShouldPersistTaps: 'handled',
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
      </Portal>
    </SafeAreaView>
  );
};
