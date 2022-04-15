import React from 'react';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
export const Screen = props => {
  return (
    <KeyboardAwareFlatList
      data={['ok']}
      removeClippedSubviews={false}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      // renderItem={null}
      ref={props.screenRef}
      testID={props.screenTestId}
      {...props}
      renderItem={(item, index) => (
        <React.Fragment key={index}>{props.children}</React.Fragment>
      )}
    />
  );
};
