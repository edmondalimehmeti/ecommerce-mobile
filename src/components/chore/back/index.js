import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import CText from '_components/electrons/ctext';
import {StackActions, useNavigation} from '@react-navigation/native';
import {colors} from '_theme';
import {testProps} from '_utils/helpers/functions';
import Icon from 'react-native-vector-icons/Entypo';
import ChevronLeftIcon from '_assets/icons/chevron_left.svg';

const CBack = ({
  onBack,
  onPress,
  title,
  extraContent,
  containerStyle,
  ...props
}) => {
  const navigation = useNavigation();

  const handlePress = async () => {
    if (onPress) {
      return onPress();
    }

    if (navigation.canGoBack()) {
      navigation.goBack(null);
      onBack && onBack();
    } else {
      navigation.dispatch(StackActions.replace('Account'));
    }
  };

  return (
    <View style={containerStyle}>
      <View style={styles.root}>
        <TouchableOpacity
          {...testProps('back-button')}
          style={styles.row}
          onPress={handlePress}
          {...props}>
          <ChevronLeftIcon style={styles.icon} />

          {!!title && (
            <CText
              style={styles.title}
              txt={title}
              {...testProps('back-button-title')}
            />
          )}
        </TouchableOpacity>
        <View style={styles.extraContent}>{extraContent}</View>
      </View>
    </View>
  );
};
export default CBack;
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    marginLeft: 14,
    color: colors.dark,
    fontWeight: '700',
  },
  row: {flexDirection: 'row', alignItems: 'center', flex: 1},
  extraContent: {marginLeft: 30},
  icon: {
    paddingLeft: 20,
  },
});
