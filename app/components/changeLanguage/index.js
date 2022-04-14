import React, {useContext, useState, useEffect} from 'react';
import {Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {changeLanguage} from 'redux-actions';
import {LocalizationContext} from '../../App';
import {Text} from '../text';

export const ChangeLanguage = props => {
  const {buttonStyle, textStyle} = props;
  const dispatch = useDispatch();
  const {locale, setLocale} = useContext(LocalizationContext);
  const [condition, setCondition] = useState();

  const {languageData} = useSelector(state => ({
    languageData: state.currentLanguageMode.languageMode,
  }));

  const onPressChange = () => {
    if (condition) {
      setLocale('en');
      dispatch(changeLanguage('en'));
    } else {
      setLocale('ar');
      dispatch(changeLanguage('ar'));
    }
    setCondition(!condition);
  };

  useEffect(() => {
    if (languageData === 'en') {
      setLocale('en');
    } else {
      setLocale('ar');
    }
  }, [languageData, setLocale]);

  return (
    <Pressable style={buttonStyle} onPress={() => onPressChange()}>
      <Text
        style={textStyle}
        tx={locale !== 'en' ? 'condition.en' : 'condition.ar'}
      />
    </Pressable>
  );
};
