import React from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {Text, Screen, TitleBox, Header} from 'components';
import {useNavigation} from '@react-navigation/native';
import {
  size,
  color,
  IcHelp,
  IcCustomer,
  IcFile,
  IcLicenseLine,
  IcMdContacts,
  IcShieldFill,
} from 'theme';
import * as styles from './styles';
export const HelpSupportScreen = () => {
  // const navigation = useNavigation();
  const toastRef = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [helpSupportData, setHelpSupportData] = useState();

  const {token} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
  }));
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getHelpSupportData = async () => {
    setLoading(true);
    const getHelpSupportHeader = {
      token: token,
    };
    // console.log('getHelpSupportHeader ==>', getHelpSupportHeader);
    const getHelpSupportResponse = await dispatch(
      getHelpSupport(getHelpSupportHeader),
    );
    const res = getHelpSupportResponse.payload;
    // console.log('getHelpSupport ==>', res);
    setLoading(false);
    if (res.status) {
      // console.log('getHelpSupport data ==>', res.data.HelpSupportData);
      toastMessage(res.message);
      setHelpSupportData(res.data.HelpSupportData);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    getHelpSupportData();
  }, []);
  return (
    <SafeAreaView style={styles.full()}>
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        title={'help_screen.title'}
      />
      <Screen style={styles.container()} showsVerticalScrollIndicator={false}>
        <View style={styles.mainView()}>
          <Text style={styles.textMainHeader()} tx={'help_screen.support'} />
          <View style={styles.supportView()}>
            <Pressable style={styles.supportSubcategoriesView()}>
              <IcHelp
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text
                style={styles.textSupport()}
                tx={'help_screen.disclosures'}
              />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <IcMdContacts
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text
                style={styles.textSupport()}
                tx={'help_screen.contact_us'}
              />
            </Pressable>
          </View>
          <View style={styles.dashView()} />
          <Text
            style={styles.textMainHeader()}
            tx={'help_screen.disclosures'}
          />
          <View style={styles.supportView()}>
            <Pressable style={styles.supportSubcategoriesView()}>
              <IcFile
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text style={styles.textSupport()} tx={'help_screen.new_terms'} />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <IcShieldFill
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text style={styles.textSupport()} tx={'help_screen.Privacy'} />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <IcCustomer
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text style={styles.textSupport()} tx={'help_screen.crm'} />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <IcLicenseLine
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text style={styles.textSupport()} tx={'help_screen.licenses'} />
            </Pressable>
          </View>
        </View>
      </Screen>
    </SafeAreaView>
  );
};
