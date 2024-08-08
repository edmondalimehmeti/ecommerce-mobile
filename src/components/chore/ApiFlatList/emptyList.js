import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import NoDataIcon from '_assets/svg/noData.svg';
import {CText} from '_components/index';
import {colors} from '_theme/index';

const EmptyList = ({text = 'No data'}) => {
  return (
    <View style={styles.root}>
      <NoDataIcon height={150} />
      <CText txt={text} style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  text: {marginTop: 40, color: colors.grey5, fontSize: 18},
});

export default EmptyList;
