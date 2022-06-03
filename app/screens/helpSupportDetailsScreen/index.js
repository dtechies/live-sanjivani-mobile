import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Screen, Header, Toast, Loader, Text} from 'components';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

import * as styles from './styles';

export const HelpSupportDetailsScreen = props => {
  const navigation = useNavigation();

  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(
    props.route.params ? props.route.params.title : '',
  );
  const [description, setDescription] = useState(
    props.route.params ? props.route.params.description : '',
  );
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
        {description != '' ? (
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
    </SafeAreaView>
  );
};
