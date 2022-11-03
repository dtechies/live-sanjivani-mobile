import React, {useState, useRef, useEffect, useContext} from 'react';
import 'react-native-gesture-handler';
import moment from 'moment';
import {SafeAreaView, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {useDispatch, useSelector} from 'react-redux';
import {
  StoreOTP,
  getUserProfile,
  editUserProfile,
  userData,
} from 'redux-actions';
import {countryCode} from 'json';
import {
  Text,
  Button,
  Screen,
  InputBox,
  Header,
  Toast,
  Loader,
} from 'components';
import {size, color, IcEdit} from 'theme';
import * as styles from './styles';
import {LocalizationContext} from '../../App';
import {genderVal, languageVal} from 'json';

export const ProfileDetailScreen = props => {
  const dispatch = useDispatch();
  const {setLocale} = useContext(LocalizationContext);
  const {userDetails = {}} = useSelector(state => ({
    userDetails: state.userDataReducer.userDataResponse.userData,
  }));
  const [firstNm, setFirstNm] = useState(userDetails.first_name);
  const [firstNmErr, setFirstNmErr] = useState('');
  const [lastNm, setLastNm] = useState(userDetails.last_name);
  const [lastNmErr, setLastNmErr] = useState('');
  const [dob, setDob] = useState(userDetails.dob);
  const [givenDate, setGivenDate] = useState(userDetails.dob);
  const [dobErr, setDobErr] = useState('');
  const [email, setEmail] = useState(userDetails.email);
  const [emailErr, setEmailErr] = useState('');
  const [changeBtn, setChangeBtn] = useState('Change');
  const [phone, setPhone] = useState(userDetails.mob_no);
  const [initialPhone, setInitialPhone] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const [OtpErr, setOtpErr] = useState('');
  const [gender, setGender] = useState(userDetails.gender);
  const [genderDefault, setGenderDefault] = useState({});
  const [countryCodeDefault, setCountryCodeDefault] = useState({
    label: userDetails.country_code,
    value: userDetails.country_code,
  });
  const [genderErr, setGenderErr] = useState('');
  const [language, setLanguage] = useState(userDetails.language);
  const [languageDefault, setLanguageDefault] = useState({});
  const [languageErr, setLanguageErr] = useState('');
  const [extra, setExtra] = useState(0);
  const [isEditable, setIsEditable] = useState(false);
  const [isEditablePhone, setIsEditablePhone] = useState(false);
  const [imageData, setImageData] = useState({
    path: userDetails.image ? userDetails.image : '',
  });
  const [isImageData, setIsImageData] = useState(false);
  const [imageDataErr, setImageDataErr] = useState('');
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [otp, setOtp] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [otpId, setOtpId] = useState('');
  const [loading, setLoading] = useState(false);
  const currentDate = new moment().format('YYYY-MM-DD');
  const [countryCodeVal, setCountryCodeVal] = useState('+91');
  const [id, setId] = useState(null);

  const modalRef = useRef();
  const toastRef = useRef();

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  useEffect(() => {
    genderVal.map(item => {
      if (item.value === userDetails.gender) {
        setGenderDefault(item);
      }
    });
    languageVal.map(val => {
      if (val.value === userDetails.language) {
        setLanguageDefault(val);
      }
    });
    getUserProfileData();
    setExtra(extra + 1);
  }, []);
  const getUserProfileData = async () => {
    // setLoading(true);
    const getOtpResponse = await dispatch(getUserProfile());
    let res = {status: false, message: 'Connection Error...!'};
    if (getOtpResponse !== undefined) {
      res = getOtpResponse;
    }
    if (res.status) {
      console.log(
        'getUserProfileData GET USER NO RESPONSE response data ==>',
        res.data,
      );
      setFirstNm(res.data.UserProfileData.first_name);
      setLastNm(res.data.UserProfileData.last_name);
      setDob(res.data.UserProfileData.dob);
      setEmail(res.data.UserProfileData.email);
      setPhone(res.data.UserProfileData.mob_no);
      setInitialPhone(res.data.UserProfileData.mob_no);
      setGender(res.data.UserProfileData.gender);
      setId(res.data.UserProfileData.id);
      setLanguage(res.data.UserProfileData.language);

      genderVal.map(item => {
        if (item.value === res.data.UserProfileData.gender) {
          setGenderDefault(item);
        }
      });
      languageVal.map(val => {
        if (val.value == res.data.UserProfileData.language) {
          setLanguageDefault(val);
        }
      });
      setCountryCodeDefault({
        label: res.data.UserProfileData.country_code,
        value: res.data.UserProfileData.country_code,
      });
      setImageData({path: res.data.UserProfileData.image});
      setExtra(extra + 1);
    } else {
      setLoading(false);
      // toastMessage(res.message);
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
      // console.log('image ==> ', image);
      setImageData(image);
      setIsImageData(true);
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
      setIsImageData(true);
      setImageDataErr('');
      setExtra(extra + 1);
    });
  };
  const getCurrentDate = givenDate => {
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = year + '-' + month + '-' + day;
    setDob(newDate);
    setGivenDate(givenDate);
    setDobErr('');
    setShowDate(false);
  };
  const validation = () => {
    let error = false;
    if (firstNm === '') {
      error = true;
      setFirstNmErr('Please Enter First Name');
    }
    if (lastNm === '') {
      error = true;
      setLastNmErr('Please Enter Last Name');
    }
    if (lastNm === '') {
      error = true;
      setLastNmErr('Please Enter Last Name');
    }
    if (gender === '') {
      error = true;
      setGenderErr('Please select Gender');
    }
    if (dob === '') {
      error = true;
      setDobErr('Please select Date');
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '') {
      error = true;
      setEmailErr('Please Enter Email Address');
    } else if (reg.test(email) === false) {
      error = true;
      setEmailErr('Invalid email');
    }
    if (phone === '') {
      error = true;
      setPhoneErr('Please Enter Phone number');
    } else if (phone.length < 10) {
      error = true;
      setPhoneErr('Invalid Phone number');
    }
    if (otp) {
      if (otpValue == '') {
        error = true;
        setOtpErr('Enter OTP Value');
      } else if (otpValue.length != 4) {
        error = true;
        setOtpErr('Enter 4 Digit OTP Number');
      }
    }
    if (language === '') {
      error = true;
      setLanguageErr('Please select Language');
    }

    if (!error) {
      setChangeBtn('Change');
      editProfileDetails();
    }
  };
  // const onGetOtp = async () => {
  //   setLoading(true);
  //   const getOtpBody = {
  //     mob_no: phone,
  //     country_code: countryCodeVal,
  //     user_id: userDetails.id,
  //   };
  //   console.log('getOtpBody ==>', getOtpBody);
  //   const getOtpResponse = await dispatch(StoreOTP(getOtpBody));
  //   const res = getOtpResponse;
  //   if (res.status) {
  //     console.log('response data ==>', res.data.otp);
  //     setOtpId(res.data.id);
  //     toastMessage(res.message);
  //     setLoading(false);
  //     setExtra(extra + 1);
  //   } else {
  //     setLoading(false);
  //     toastMessage(res.message);
  //   }
  // };

  const editProfileDetails = async () => {
    setLoading(true);
    let formData = new FormData();

    formData.append('user_id', userDetails?.id);
    formData.append('first_name', firstNm);
    formData.append('last_name', lastNm);
    formData.append('gender', gender);
    if (isImageData) {
      formData.append('image', {
        uri: imageData.path,
        name: imageData.imageName,
        type: imageData.mime,
      });
    }
    formData.append('dob', dob);
    formData.append('email', email);
    if (otp) {
      formData.append('mob_no', phone);
      formData.append('otp_id', otpId);
      formData.append('otp', otpValue);
      formData.append('country_code', countryCodeVal);
    }
    formData.append('language', language);

    // console.log('editUserProfile formData =>', formData);

    const EditUserProfileResponse = await dispatch(editUserProfile(formData));
    const res = EditUserProfileResponse;
    // console.log('EditUserProfileResponse Res ==>', res);
    // return;
    if (res.status) {
      // console.log('response RES  data :- ', res.data);
      var a = moment(res.data.dob);
      var b = moment(currentDate);
      var years = b.diff(a, 'year');
      b.add(years, 'years');
      // res.data.token = userStore.userData.token;
      // userStore.userData = res.data;
      // console.log('VALIUEEEE', res.data);
      if (res.data.language === 'english') {
        setLocale('en');
      } else {
        setLocale('hn');
      }
      await dispatch(userData({userData: res.data, age: years, login: true}));
      setLoading(false);

      toastMessage(res.message);
      setIsEditable(false);
      setOtpValue('');
      setOtp(false);
      setIsEditablePhone(false);
      getUserProfileData();
      setExtra(extra + 1);

      var a = moment(res.data.dob);
      var b = moment(currentDate);
      var years = b.diff(a, 'year');

      await dispatch(userData({userData: res.data, age: years, login: true}));
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  useEffect(() => {
    if (props.route.params) {
      setPhone(props.route.params?.mob_no);
    }
  }, []);

  return (
    <SafeAreaView>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={1000}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        iconPress={() => {
          modalRef.current.open();
        }}
        source={{uri: imageData && imageData?.path}}
        isColor={true}
        isLogo={true}
        isLongArrowLeft={false}
        isLeftArrow={true}
        isLogoCenter={true}
        isHeading={true}
        isCamera={true}
        isEditDetails={true}
        title={'ProfileDetailScreen.title'}
        isDisabled={!isEditable}
        // secName={email}
      />
      <Screen
        style={styles.screenContainer()}
        enableResetScrollToCoords={false}>
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
                setIsEditablePhone(false);
                setChangeBtn('Change');
                setPhone(initialPhone);
                setOtp(false);
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
              setFirstNmErr('');
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
              setLastNmErr('');
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
              labelTxField="label"
              valueField="value"
              // placeholder={'Gender'}
              dropdownPosition={'bottom'}
              style={styles.dropdown()}
              placeholderStyle={styles.labelFieldText(isEditable)}
              selectedTextStyle={styles.selectedOptionTextStyle(isEditable)}
              maxHeight={size.moderateScale(55)}
              containerStyle={styles.dropdownContainer()}
              isTxEnabled={true}
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
                      tx={item.label}
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
              date={givenDate ? new Date(givenDate) : new Date()}
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
              setEmailErr('');
              setExtra(extra + 1);
            }}
            editable={isEditable}
            keyboardType={'email-address'}
          />
          {emailErr ? <Text style={styles.errorText()}>{emailErr}</Text> : null}

          <View style={styles.countryCodeRowView()}>
            {isEditablePhone ? (
              <Dropdown
                defaultValue={countryCodeDefault}
                data={countryCode}
                labelField="label"
                valueField="value"
                dropdownPosition={'bottom'}
                style={styles.countryCodeDropdown()}
                placeholderStyle={styles.labelFieldText()}
                selectedTextStyle={styles.countryCodeSelectedOptionTextStyle()}
                maxHeight={size.moderateScale(60)}
                containerStyle={styles.countryCodeDropdownContainer()}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                flatListProps={{
                  bounces: false,
                }}
                onChange={item => {
                  setCountryCodeVal(item.value);
                  setIsFocus(false);
                }}
                renderItem={item => {
                  return (
                    <View>
                      <Text
                        text={item.value}
                        style={styles.countryCodeInsideLabelFieldText()}
                      />
                      <View style={styles.countryCodeSeparator()} />
                    </View>
                  );
                }}
              />
            ) : (
              <InputBox
                disabled={isEditable ? false : true}
                editable={isEditablePhone}
                mainContainerStyle={styles.inputMainCountryCode()}
                inputStyle={styles.button(isEditablePhone)}
                value={countryCodeDefault.value}
              />
            )}
            <InputBox
              mainContainerStyle={styles.updateMobileNumberInputMain()}
              inputStyle={styles.button(isEditablePhone)}
              value={phone}
              onChangeText={text => {
                setPhone(text);
                setPhoneErr('');
                setExtra(extra + 1);
              }}
              placeholder={'xxxxxxxxxx'}
              withButton={true}
              btnName={changeBtn}
              disabled={isEditable ? false : true}
              onRightIconPress={() => {
                setIsEditablePhone(true);
                setChangeBtn('Send OTP');
                setExtra(extra + 1);
                if (changeBtn == 'Send OTP') {
                  if (phone.length == 10) {
                    setOtp(true);
                    // onGetOtp();
                    setOtpValue('');
                    navigation.navigate('otpSelectionScreen', {
                      mob_no: phone,
                      country_code: countryCodeVal,
                      email: email.toLowerCase(),
                      isProfile: true,
                      id: id,
                    });
                  } else {
                    setPhoneErr('Invalid Phone number');
                  }
                }
              }}
              buttonStyle={styles.changePhoneBtnStyle(isEditable)}
              maxLength={10}
              keyboardType="numeric"
              editable={isEditablePhone}
            />
          </View>
          {phoneErr ? <Text style={styles.errorText()}>{phoneErr}</Text> : null}

          {otp && (
            <InputBox
              placeholder={'Enter OTP'}
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.button(isEditable)}
              maxLength={4}
              value={otpValue}
              keyboardType="numeric"
              onChangeText={text => {
                setOtpValue(text);
                setOtpErr('');
              }}
              editable={isEditable}
            />
          )}
          {OtpErr ? <Text style={styles.errorText()}>{OtpErr}</Text> : null}
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
              labelTxField="label"
              valueField="value"
              // placeholder={'Language'}
              dropdownPosition={'bottom'}
              style={styles.dropdown()}
              // placeholderStyle={styles.labelFieldText()}
              selectedTextStyle={styles.selectedOptionTextStyle(isEditable)}
              maxHeight={size.moderateScale(56)}
              containerStyle={styles.dropdownContainer()}
              // value={language}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              isTxEnabled={true}
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
                      tx={item.label}
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
                validation();
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
