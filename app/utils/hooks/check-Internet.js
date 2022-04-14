import NetInfo from '@react-native-community/netinfo';

export const CheckInternet = async () => {
  let internetStatus = await NetInfo.fetch().then(state => {
    return state.isConnected;
  });
  return internetStatus;
};
