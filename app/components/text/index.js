import React, {useContext} from 'react';
import {Text as ReactNativeText} from 'react-native';
import 'i18n';

import {LocalizationContext} from '../../App';

export const Text = props => {
  const {tx, txOptions, text, children, style, ...rest} = props;
  const {t} = useContext(LocalizationContext);
  const i18nText = tx && t(tx, txOptions);
  const content = i18nText || text || children;

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  );
};
