import React, {useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import CBack from '_components/chore/back';
import {colors} from '_theme/index';
import {FlatList, StyleSheet, View} from 'react-native';
import {CButton, CText} from '_components/index';
import Logo from '_assets/svg/logo.svg';

const PurchaseHistoryScreen = ({navigation}) => {
  const [purchases, setPurchases] = useState([]);
  return (
    <SafeAreaViewScreen style={{backgroundColor: colors.background}}>
      <CBack title="Purchase History" containerStyle={styles.backButton} />
      <FlatList
        data={[]}
        contentContainerStyle={
          purchases.length
            ? {}
            : {flex: 1, justifyContent: 'center', alignItems: 'center'}
        }
        ListEmptyComponent={
          <View style={{alignItems: 'center'}}>
            <Logo width={200} height={100} />
            <CText
              txt="YOU CURRENTLY HAVE NO ORDERS"
              style={{marginVertical: 25}}
            />
            <CButton
              width={200}
              text="START SHOPPING"
              onPress={() => navigation.pop()}
            />
          </View>
        }
      />
    </SafeAreaViewScreen>
  );
};

const styles = StyleSheet.create({
  backButton: {
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});

export default PurchaseHistoryScreen;
