import React, {useRef, useState} from 'react';
import {SafeAreaView, View, TextInput, Pressable, Image} from 'react-native';
import {Screen, Header, Toast, Loader, Text, Button} from 'components';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {color, size, IcCrossArrow} from 'theme';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {addFeedBack} from 'redux-actions';
import * as styles from './styles';

export const HelpSupportDetailsScreen = props => {
  const navigation = useNavigation();
  const modalRef = useRef();
  const dispatch = useDispatch();
  const modalPreviewRef = useRef();
  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  const [imageUpload, setImageUpload] = useState({});
  const [extra, setExtra] = useState(0);
  const [descriptionValue, setDescription] = useState('');
  const [descriptionErr, setDescriptionErr] = useState('');
  const [imageData, setImageData] = useState('Upload or take picture');
  const title = props.route.params ? props.route.params.title : '';
  const description = props.route.params ? props.route.params.description : '';

  console.log('title', title);
  const toastMessage = msg => {
    toastRef.current.show(msg);
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
      setImageData('Preview Image');
      setImageUpload(image);
      setExtra(extra + 1);
      console.log('uploadFromGallery Image ==>', image);
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
      // console.log('takeFromCamera Image ==>', image);
      modalRef.current.close();
      setImageData('Preview Image');
      setImageUpload(image);
      setExtra(extra + 1);
    });
  };

  const addMedicalJournalData = async () => {
    setLoading(true);
    let formData = new FormData();
    formData.append('date', moment().toISOString());
    formData.append('note', description);
    Object.keys(imageUpload).length > 0 &&
      formData.append('image', {
        uri: imageUpload.path,
        name: imageUpload.imageName,
        type: imageUpload.mime,
      });
    const SubCategoryResponse = await dispatch(addFeedBack(formData));
    console.log('DATAAA', SubCategoryResponse);
    let res = {status: false, message: 'Connection Error...!'};
    if (SubCategoryResponse) {
      res = SubCategoryResponse;
    }
    setExtra(extra + 1);
    if (res.status) {
      setLoading(false);
      toastMessage(res.message);
      setExtra(extra + 1);
      navigation.goBack();
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  const validation = () => {
    if (descriptionValue === '') {
      setDescriptionErr('Please Enter Description...');
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
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        text={title}
      />
      <Screen style={styles.container()} showsVerticalScrollIndicator={false}>
        {title == 'Contact US' ? (
          <View style={styles.CContainer()}>
            <Text
              style={styles.cardTxt(2)}
              text={`Use the form below to \nsubmit request to us`}
            />
            <Pressable
              style={styles.imageView()}
              onPress={() => {
                if (imageData == 'Upload or take picture') {
                  modalRef.current.open();
                } else {
                  modalPreviewRef.current.open();
                }
              }}>
              <Text style={styles.textImage()} text={imageData} />
            </Pressable>
            <TextInput
              value={descriptionValue}
              placeholder={'Enter description'}
              placeholderTextColor={color.dimGrey}
              multiline
              numberOfLines={4}
              onChangeText={text => {
                setDescription(text);
                setDescriptionErr('');
              }}
              style={styles.containerVal()}
            />
            {descriptionErr !== '' ? (
              <Text style={styles.errorText(2)}>{descriptionErr}</Text>
            ) : null}
            <Button
              buttonStyle={styles.btnContinue()}
              buttonText={styles.btnContinueTxt()}
              nameTx={'medicalJournal_screen.send'}
              onPress={() => {
                descriptionValue !== ''
                  ? addMedicalJournalData()
                  : validation();
              }}
            />
          </View>
        ) : description != '' ? (
          <WebView
            originWhitelist={['*']}
            source={{
              html: description,
            }}
            style={styles.mainView()}
          />
        ) : (
          <Text style={styles.noData()}>Records Not Found... </Text>
        )}
      </Screen>
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
            <Button
              onPress={() => takeFromCamera()}
              nameTx="medicalJournal_screen.take_picture"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
            <Button
              onPress={() => uploadFromGallery()}
              nameTx="medicalJournal_screen.upload_picture"
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
              nameTx="medicalJournal_screen.changeImage"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
          </View>
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};
