import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GetUserFavSubCategoryPdfAction} from 'redux-actions';
import {
  Text,
  Screen,
  InputBox,
  Button,
  Header,
  MedicalItems,
  Toast,
  Loader,
} from 'components';

import {useDispatch} from 'react-redux';

import * as styles from './styles';

export const SharingDetailScreen = props => {
  const navigation = useNavigation();
  const [emailVal, setEmailVal] = useState('');
  const [emailCorrect, setEmailCorrect] = useState('');
  const [extra, setExtra] = useState(0);
  const [sharingData, setSharingData] = useState([]);
  const [sharingId, setSharingId] = useState('');
  const [loading, setLoading] = useState(false);
  const toastRef = useRef();
  const dispatch = useDispatch();

  const emailValidation = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(emailVal) === false) {
      setEmailCorrect('sharingDetail_screen.email_error');
      return false;
    } else {
      sendPDF();
      setEmailCorrect('');
    }
  };
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const sendPDF = async () => {
    setLoading(true);
    // console.log('dataId');
    const pdfData = {
      email: emailVal,
      subcategory_id: sharingId,
    };

    // setExtra(extra + 1);
    // console.log('fevUserBody', pdfData);
    const SubCategoryResponse = await dispatch(
      GetUserFavSubCategoryPdfAction(pdfData),
    );
    let res = {status: false, message: 'Connection Error...!'};
    if (SubCategoryResponse) {
      res = SubCategoryResponse;
    }
    // console.log('addUserFavoriteData res RESSS==>', res);

    if (res.status) {
      // console.log('true');
      setLoading(false);
      toastMessage(res.message);
      setExtra(extra + 1);
      // navigation.goBack();
      setEmailVal('');
    } else {
      // console.log('false');

      setLoading(false);
      toastMessage(res.message);
    }
  };
  const download = async () => {
    const pdfData = {
      subcategory_id: sharingId,
    };
    const SubCategoryResponse = await dispatch(
      GetUserFavSubCategoryPdfAction(pdfData),
    );
    let res = {status: false, message: 'Connection Error...!'};
    if (SubCategoryResponse) {
      res = SubCategoryResponse;
    }
    // console.log('addUserFavoriteData res RESSS==>', res.data.link);
    if (res.status) {
      // console.log('true');
      toastMessage(res.message);
      let pdf = res.data.link;
      // setLink(res.data.link);
      Linking.openURL(`http://${pdf.slice(8)}`);
      // pdfDownload(res.data.link);
    } else {
      // console.log('false');
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    if (props.route.params.selectedItems) {
      setSharingData(props.route.params.selectedItems);
      // setSharingData(selectedItems);
    }
    const data = props.route.params.selectedItems;
    // console.log('data', data);
    const id = data.map(i => i.subcategory_id);
    // console.log('id', id);
    setSharingId(id);
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
        isLeftArrow={true}
        isHeading={true}
        text={sharingData.length + '  Items selected'}
      />

      <Screen withScroll>
        <View style={styles.rowListView()}>
          {sharingData.map((item, index) => {
            // console.log('item', item);
            return (
              // <View></View>
              <MedicalItems
                index={index}
                key={index.toString()}
                containerStyle={styles.listViewStyle()}
                nameFirst={item.value}
                nameSecond={item.name}
                nameThird={item.unit}
                svgCardItems={item.icon}
                isSelected={item.selectedCard}
              />
            );
          })}
        </View>
        <Text
          style={styles.textItemToShare()}
          tx="sharingDetail_screen.shareTo"
        />

        <InputBox
          value={emailVal}
          onChangeText={val => {
            setEmailVal(val);
            setEmailCorrect('');
            setExtra(extra + 1);
          }}
          mainContainerStyle={styles.inputMainContainer()}
          inputStyle={styles.labelFieldText()}
          placeholder={'Please Enter Email'}
        />
        {emailCorrect ? (
          <Text style={styles.textValidation()} tx={emailCorrect} />
        ) : null}
        <View style={styles.row()}>
          <Button
            onPress={() => {
              emailValidation();
              // emailVal ? navigation.goBack() : onAddPressValidation();
            }}
            nameTx="sharing_screen.send_pdf"
            buttonStyle={styles.addButtonStyle()}
            buttonText={styles.textAddButton()}
          />
          <Button
            nameTx="sharing_screen.download"
            buttonStyle={styles.addButtonStyle()}
            buttonText={styles.textAddButton()}
            onPress={() => download()}
          />
        </View>
      </Screen>
    </SafeAreaView>
  );
};
