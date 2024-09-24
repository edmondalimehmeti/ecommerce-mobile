import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Screen} from '_scenes/base';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '_theme/index';
import {CButton, CButtonOutline, CText} from '_components/index';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import Banner from '_assets/svg/banner.svg';

const LandingScreen = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Screen>
      <LinearGradient
        colors={[colors.lightGreen, colors.white]}
        start={{x: 0, y: 0.1}}
        style={styles.container}
        end={{x: 0, y: 0.8}}>
        <Image
          source={require('_assets/images/shopping.png')}
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
          <CButton
            content={
              <AntDesignIcons
                name="google"
                color={colors.white}
                size={20}
                style={{marginRight: 5}}
              />
            }
            text="CONTINUE WITH GOOGLE"
          />
          <CButton
            width={260}
            content={
              <FontAwesome5Icons
                name="facebook"
                color={colors.white}
                size={20}
                style={{marginRight: 5}}
              />
            }
            text="CONTINUE WITH FACEBOOK"
          />
          <CButtonOutline text="CONTINUE WITH EMAIL" onPress={goToRegister} />
        </View>
        <CText style={{fontSize: 12}}>
          <CText txt="ALREADY HAVE AN ACCOUNT?" style={styles.text} />{' '}
          <Text style={styles.link} children="LOGIN" onPress={goToLogin} />
        </CText>
        <Banner />
      </LinearGradient>
    </Screen>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  root: {flex: 1},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 30,
  },
  image: {width: 210, height: 308},
  buttonContainer: {rowGap: 10},
  link: {color: colors.green, fontWeight: '700'},
  text: {fontWeight: '500', fontSize: 12},
});
